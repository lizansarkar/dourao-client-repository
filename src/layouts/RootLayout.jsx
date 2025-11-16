import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'

export default function RootLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
