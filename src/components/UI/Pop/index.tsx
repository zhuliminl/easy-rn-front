import React, { useRef, useEffect, useState, useImperativeHandle } from 'react'
import reactDom from 'react-dom'
import { getDivById } from '@utils/help'

interface Props {
  children?: React.ReactNode;
  left?: number,
  top?: number,
  right?: number,
  bindId: string,
}

export default React.forwardRef<any, Props>((props, ref) => {
  const [visible, setVisible] = useState(false)

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef)

  const el = useRef(document.createElement('div'))

  useEffect(() => {
    getDivById(props.bindId)?.appendChild(el.current)
    return () => {
      getDivById(props.bindId)?.removeChild(el.current)
    }
  }, [])

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


  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true)
    },
    close: () => {
      setVisible(false)
    }
  }))

  // if (!visible) return null

  return reactDom.createPortal(
    <div
      ref={wrapperRef}
      style={{
        zIndex: 999,
        position: 'absolute',
        top: 0,
        opacity: !visible ? 0 : 1,
        // transition: 'all .8s',
        transition: '150ms linear all',
        visibility: !visible ? 'hidden' : 'visible',
        ...(props.top && { top: props.top }),
        ...((props.left || props.left === 0) && { left: props.left }),
        ...((props.right || props.right === 0) && { right: props.right }),
        transform: visible? 'translateY(0px)': 'translateY(-10px)',
      }}
    >
      {props.children}
    </div>,
    el.current,
  )
})
