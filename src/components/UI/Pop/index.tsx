import React, { useRef, useEffect, useState, useImperativeHandle } from 'react'
import reactDom from 'react-dom'
import { getAppContentDiv } from '@utils/help'

interface Props {
  children?: React.ReactNode;
  left?: number,
  top?: number,
  right?: number,
}

export default React.forwardRef<any, Props>((props, ref) => {
  const [visible, setVisible] = useState(false)
  const [actualShow, setActualShow] = useState(false)

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef)

  const el = useRef(document.createElement('div'))

  useEffect(() => {
    getAppContentDiv()?.appendChild(el.current)
    return () => {
      getAppContentDiv()?.removeChild(el.current)
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
        position: 'fixed',
        top: 0,
        opacity: !visible ? 0 : 1,
        transition: 'all .2s',
        visibility: !visible ? 'hidden' : 'visible',
        ...(props.top && { top: props.top }),
        ...(props.left && { left: props.left }),
        ...(props.right && { right: props.right }),
      }}
    >
      {props.children}
    </div>,
    el.current,
  )
})
