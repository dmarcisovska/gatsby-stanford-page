import React from "react"
import Layout from "../components/Layout"
import gardens from "../assets/images/stanford-gardens.jpg"
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap"

const Error = () => {
  return (
    <Layout>
      <Container fluid className="body-container">
        <div className="hero" id="error">
          <h1 className="hero-text"> 404 Page</h1>
        </div>
      </Container>
      <Container>
        <Button variant="primary" className="mt-5 text-center">
          <Nav.Link href="/" className="text-white">
            {" "}
            Go back home{" "}
          </Nav.Link>
        </Button>
        <p className="mt-5">
          Enamel pin forage migas iceland tilde. Pickled church-key sustainable
          knausgaard cred, bitters keytar man braid pug fixie. Everyday carry
          vegan keffiyeh messenger bag XOXO godard. Semiotics gentrify craft
          beer you probably haven't heard of them. Meditation jianbing glossier
          narwhal, skateboard roof party plaid venmo air plant truffaut
          adaptogen keytar waistcoat lyft 3 wolf moon. DIY chartreuse chillwave
          taiyaki taxidermy deep v 3 wolf moon. Viral coloring book XOXO
          shoreditch flannel.
        </p>
      </Container>
    </Layout>
  )
}

export default Error
