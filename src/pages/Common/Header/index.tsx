import React from 'react'
import Theme from '@theme'
import styled from 'styled-components'
import { usePopUp } from '@hooks/usePopUp'
import { Card, Space, Pop, Box, PaddingIt, Text } from '@components/UI'
import Logo from '@components/Logo'
import BoxArrow from '@components/BoxArrow'
import Avatar from '@components/Avatar'

const ID1 = 'account-selector-container'
export default () => {
  const popup1 = usePopUp()
  const popup2 = usePopUp()

  return (
    <Container >
      <Box width={Theme.Space4} />
      <Logo />
      <Box width={Theme.Space4} />
      <PaddingIt
        id={ID1}
        paddingH={Theme.Space3}
        radius={Theme.BorderRadius2}
        hover2
        style={{
          position: 'relative',
          width: Theme.ButtonWidth3,
          height: Theme.Height4,
          alignItems: 'center'
        }}
        onClick={() => {
          popup1.open()
        }}
      >
        <Avatar />
        <Text noSelect bold style={{ flex: 1 }}>{'萤火虫'}</Text>
        <BoxArrow />
      </PaddingIt>

      <Pop bindId={ID1} ref={popup1.ref} left={0} top={40} >
        <Card radius={Theme.BorderRadius2} shadow1 border width={300}>
          <Space height={Theme.Height9 * 5} />
        </Card>
      </Pop>
      {/* <Pop ref={popup2.ref} left={30} top={100} >
        <Card shadow border width={200}>
          <Space height={Theme.Height9 * 3} />
        </Card>
      </Pop> */}
      <div style={{ flex: 1 }}></div>
      <Avatar hover />
      <Box width={Theme.Space5} />
    </Container>
  )
}

const Container = styled.div`
  height:${Theme.NavHeight}px;
  background-color:${Theme.ColorWhite};
  border-bottom: ${Theme.BorderWidth1}px solid ${Theme.BorderColor};
  display: flex;
  flex-direction: row;
  align-items: center;
`