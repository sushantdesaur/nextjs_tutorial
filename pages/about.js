import MainNav from '../components/nav/MainNav.js'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <MainNav/>
      <Container>
        <Row>
          <Col>About Page</Col>
        </Row>
      </Container>
    </>
  );
};

export default About;