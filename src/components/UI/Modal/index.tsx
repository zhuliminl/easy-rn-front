import React, { useState, useImperativeHandle } from 'react'
import Theme from '@theme'
import styled, { css } from 'styled-components'
import Modal from 'react-modal';


Modal.setAppElement('#root')

export default React.forwardRef<any, any>((props, ref) => {
  const [visible, setVisible] = useState(false)



  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true)
    },
    close: () => {
      setVisible(false)
    }
  }))

  return (
    <Modal
      isOpen={visible}
      onAfterOpen={() => { }}
      onRequestClose={() => { 
        setVisible(false)
      }}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {props.children}
    </Modal>
  )
})

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    margin: 0,
    border: 'none',
    borderRadius: Theme.BorderRadius1,
  },
  overlay: {
    backgroundColor: 'rgb(0,0,0,0.4)'
  }
};