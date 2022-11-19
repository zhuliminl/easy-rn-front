import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@pages/Common/Header'
export default () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
    </>
  )
}