import MainNav from "../components/nav/MainNav.js";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
} from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <MainNav />
      <Container fluid className="d-flex justify-content-center mt-4">
        <Row>
          <Col>
            <Card style={{ height: "35rem", width: "35rem" }}>
              <Card.Header>Contact Us</Card.Header>
              <Card.Body>
                <Card.Title>
                  Every Great Businessman Was Once A Beginner
                </Card.Title>
                <Card.Text>
                  Let's Start With Your Business Idea Today!
                </Card.Text>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control as="textarea" placeholder="Full Name" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Organization"
                  className="mb-3"
                >
                  <Form.Control as="textarea" placeholder="Full Name" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Business Requirement"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Please share you business requirement"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <Button variant="light" className="mt-2">
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
