import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../assets/css/main.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
