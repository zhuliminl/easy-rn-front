import React from 'react'


export const usePopUp = () => {
  const ref = React.useRef<{
    close: () => {},
    open: () => {}
  }>();

  const close = React.useCallback(() => {
    ref.current?.close();
  }, [])

  const open = React.useCallback(() => {
    ref.current?.open()
  }, [])

  return { ref, open, close }
}