import React from "react"
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap"
import logo from "../assets/images/logo.png"

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="">
      <Container>
        <Navbar.Brand href="/" className="">
          <img src={logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/about"> About</Nav.Link>
            <Nav.Link href="/contact"> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
