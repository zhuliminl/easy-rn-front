/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/react'
import { Outlet } from 'react-router-dom'
import Header from '@pages/Common/Header'
import SideBar from '@pages/Common/SideBar'
import Theme from '@theme'

export default () => {
  return (
    <div css={containerStyle}>
      <Header />
      <div css={contentContainer}>
        <div css={sideBarContainer}>
          <SideBar />
        </div>
        <div css={rightContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const containerStyle = css({
  backgroundColor: Theme.ColorBg1,
  flexDirection: 'column',
  height: '100vh',
  display: 'flex',
})

const contentContainer = css({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
})

const sideBarContainer = css({
  display: 'flex',
  flexDirection: 'column',
  width: Theme.SideBarWidth,
  backgroundColor: Theme.ColorWhite,
  borderRightWidth: 1,
  borderRightColor: Theme.BorderColor,
  borderRightStyle: 'solid',
})

const rightContainer = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  // backgroundColor: 
})

