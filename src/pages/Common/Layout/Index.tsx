import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@pages/Common/Header'
import SideBar from '@pages/Common/SideBar'
import Theme from '@theme'
import styled from 'styled-components'

export default () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <RightContainer>
          <Outlet />
        </RightContainer>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  flex-direction:column;
  height:100vh;
  display:flex;
`

const ContentContainer = styled.div`
  display:flex;
  flex:1;
  flex-direction:row;
`

const SideBarContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: ${Theme.SideBarWidth}px;
  background-color:${Theme.ColorWhite};
  border-right-width:1px;
  border-right-color:${Theme.BorderColor};
  border-right-style:solid;
`
const RightContainer = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
`

