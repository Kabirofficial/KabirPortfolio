import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export const MainNavigation = () => {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
