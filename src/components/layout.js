import React from "react"

import "./layout.css"
import Header from "./header"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
