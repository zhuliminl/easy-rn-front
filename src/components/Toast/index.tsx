import React from 'react'
import { useToastIsShow, useToastTitle } from '@store/toast'
import Theme from '@theme'
import styled, { css } from 'styled-components'
import { Card } from '@components/UI'


export default () => {
  const title = useToastTitle()
  const isShow = useToastIsShow()
  return (
    <Container isShow={isShow}>
      <Card
        shadow1
        width={300}
        height={Theme.Height5}
        radius={Theme.Height5 / 2}
        style={{
          backgroundColor: Theme.ColorBgCoast,
          color: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: Theme.FontSize2,
        }}>
        {title}
      </Card>
    </Container>
  )
}

const Container = styled.div<{
  isShow: boolean,
}>`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ${(props) => (
    props.isShow ? css`
      transform: translateY(40px);
    `: css`
      transform: translateY(-90px);
    `
  )}
  transition: transform 0.2s ease;
  
`