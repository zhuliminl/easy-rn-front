import React, { useState, useImperativeHandle, useEffect, useRef } from 'react'
import Theme from '@theme'
import styled, { css } from 'styled-components'
import Modal from 'react-modal';


Modal.setAppElement('#root')

type Props = {
  top: number,
  left?: number,
  right?: number,
} & any

export default React.forwardRef<Props, any>((props, ref) => {
  const [visible, setVisible] = useState(false)
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef)

  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true)
    },
    close: () => {
      setVisible(false)
    }
  }))

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: { target: any; }) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          setVisible(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref])
  }


  return (
    <Modal
      isOpen={visible}
      onAfterOpen={() => { }}
      onRequestClose={() => {
        setVisible(false)
      }}
      style={{
        content: {
          top: props.top || 100,
          bottom: 'auto',

          left: props.left || 'auto',
          right: props.right || 'auto',

          // marginRight: '-50%',
          // transform: 'translate(-50%, -50%)',
          padding: 0,
          margin: 0,
          border: 'none',
          borderRadius: Theme.BorderRadius1,
          boxShadow: 'rgb(0 0 0 / 10%) 1px 3px 13px 1px, rgb(0 0 0 / 10%) 0px 1px 2px',
        },
        overlay: {
          width: 0,
          height: 0,
          backgroundColor: 'rgb(0,0,0,0.4)'
        }
      }}
      contentLabel="pop_moal"
    >
      <div ref={wrapperRef}>
      {props.children}
      </div>
    </Modal>
  )
})
