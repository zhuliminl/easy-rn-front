import React from 'react'
import Theme from '@theme'
import styled from 'styled-components'
import { usePopUp } from '@hooks/usePopUp'
import { PopUp, Card, Space } from '@components/UI'

export default () => {
  const popup1 = usePopUp()

  return (
    <Container>
      <div >Header</div>
      <div onClick={() => {
        popup1.open()
      }}>菜单</div>
      <PopUp ref={popup1.ref} left={10}>
        <Card shadow border width={200}>
          <Space height={Theme.Height9 * 3}/>
        </Card>
        </PopUp>
    </Container>
  )
}

const Container = styled.div`
  height:${Theme.NavHeight}px;
  background-color:${Theme.ColorWhite};
  border-bottom: ${Theme.BorderWidth1}px solid ${Theme.BorderColor};
`