import React from 'react'
import Theme from '@theme'
import styled from 'styled-components'
import { usePopUp } from '@hooks/usePopUp'
import { Card, Space, Pop, Box, PaddingIt, Text } from '@components/UI'
import Logo from '@components/Logo'
import BoxArrow from '@components/BoxArrow'

export default () => {
  const popup1 = usePopUp()
  const popup2 = usePopUp()

  return (
    <Container>
      <Box width={Theme.Space4} />
      <Logo />
      <Box width={Theme.Space4} />
      <PaddingIt
        paddingH={Theme.Space3}
        radius={Theme.BorderRadius2}
        hover2
        style={{
          width: Theme.ButtonWidth2,
          height: Theme.Height4,
          alignItems: 'center'
        }}>
        <Text bold style={{ flex: 1 }}>{'萤火虫'}</Text>
        <BoxArrow />
      </PaddingIt>

      <Pop ref={popup1.ref} left={10} top={10} >
        <Card shadow border width={200}>
          <Space height={Theme.Height9 * 3} />
        </Card>
      </Pop>
      <Pop ref={popup2.ref} left={30} top={100} >
        <Card shadow border width={200}>
          <Space height={Theme.Height9 * 3} />
        </Card>
      </Pop>
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