import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import gardens from "../assets/images/stanford-gardens.jpg"
import cup from "../assets/images/stanford-cup.jpg"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stanford Demo</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        <Container fluid className="body-container">
          <div className="hero">
            <h1 className="hero-text"> Welcome to Stanford</h1>
          </div>
        </Container>
        <Container>
          <p className="mt-5">
            Enamel pin forage migas iceland tilde. Pickled church-key
            sustainable knausgaard cred, bitters keytar man braid pug fixie.
            Everyday carry vegan keffiyeh messenger bag XOXO godard. Semiotics
            gentrify craft beer you probably haven't heard of them. Meditation
            jianbing glossier narwhal, skateboard roof party plaid venmo air
            plant truffaut adaptogen keytar waistcoat lyft 3 wolf moon. DIY
            chartreuse chillwave taiyaki taxidermy deep v 3 wolf moon. Viral
            coloring book XOXO shoreditch flannel.
          </p>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={gardens} />
                <Card.Body>
                  <Card.Title>Stanford Gardens</Card.Title>
                  <Card.Text>
                    Neutra lo-fi enamel pin master cleanse, kinfolk pok pok
                    chartreuse semiotics messenger bag tattooed trust fund four
                    loko. Tacos meh chia, intelligentsia deep v quinoa hella hot
                    chicken. Aesthetic plaid ugh everyday carry.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cup} />
                <Card.Body>
                  <Card.Title>Stanford Coffee</Card.Title>
                  <Card.Text>
                    Banjo selvage jean shorts narwhal, coloring book plaid
                    knausgaard typewriter. Fingerstache food truck tbh slow-carb
                    dreamcatcher brooklyn, ethical kale chips 90's VHS helvetica
                    mumblecore kinfolk.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>{" "}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
