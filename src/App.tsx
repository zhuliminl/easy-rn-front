import * as React from "react"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import Home from '@pages/Home'
import About from '@pages/About'
import Layout from '@pages/Common/Layout'
import NotFound from '@pages/NotFound'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

