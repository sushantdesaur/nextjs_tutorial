import MainNav from '../components/nav/MainNav.js'
import Image from "next/image";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <MainNav />
      <Container fluid className="d-flex justify-content-center mt-4">
        <Row>
          <Col>
            <Card style={{ height: "30rem", width: "50rem" }}>
             <Card.Img as={ <Image
                src="/David_Beckham.jpg"
                alt="About Image"
                width={200}
                height={400}
              />}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;