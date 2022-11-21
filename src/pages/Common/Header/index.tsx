import React from 'react'
import Theme from '@theme'
import styled from 'styled-components'
import { useModal } from '@hooks/useModal'
import { Modal } from '@components/UI'

export default () => {
  const modal1 = useModal()

  return (
    <Container>
      <div >Header</div>
      <div onClick={() => {
        modal1.open()
      }}>菜单</div>
      <Modal ref={modal1.ref} />
    </Container>
  )
}

const Container = styled.div`
  height:${Theme.NavHeight}px;
  background-color:${Theme.ColorWhite};
  border-bottom: ${Theme.BorderWidth1}px solid ${Theme.BorderColor};
`