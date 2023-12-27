import React from 'react'
import MainNavigation from './mainnavigation'

const Layout = (props) => {
  return (
    <>
    <MainNavigation></MainNavigation>
    <main>{props.children}</main>
    </>
  )
}

export default Layout