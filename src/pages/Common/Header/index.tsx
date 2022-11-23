import React from 'react'
import Theme from '@theme'
import styled from 'styled-components'
import { usePopUp } from '@hooks/usePopUp'
import { Card, Space, Pop } from '@components/UI'

export default () => {
  const popup1 = usePopUp()
  const popup2 = usePopUp()

  return (
    <Container>
      <div >Header</div>
      <div onClick={() => {
        popup1.open()
        // popup2.open()
      }}>菜单</div>

      <Pop ref={popup1.ref} left={10} top={10} >
        <Card shadow border width={200}>
          <Space height={Theme.Height9 * 3} />
          <Foo />
        </Card>
      </Pop>
      <Pop ref={popup2.ref} left={30} top={100} >
        <Card shadow border width={200}>
          <Space height={Theme.Height9 * 3} />
          <Foo />
        </Card>
      </Pop>
    </Container>
  )
}

const Container = styled.div`
  height:${Theme.NavHeight}px;
  background-color:${Theme.ColorWhite};
  border-bottom: ${Theme.BorderWidth1}px solid ${Theme.BorderColor};
`
const Foo = () => {
  console.log('saul FFFFFFf')
  return <div>FFF</div>
}