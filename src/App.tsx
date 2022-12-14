import React from "react"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import Home from '@pages/Home'
import About from '@pages/About'
import Layout from '@pages/Common/Layout'
import NotFound from '@pages/NotFound'
import Demo from '@pages/Demo'
import Theme from '@theme'
import Toast from '@components/Toast'
import './styles/global.css'
import ReactTooltip from 'react-tooltip';

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Demo />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toast />
      <ReactTooltip delayShow={300} />
    </>
  )
}

