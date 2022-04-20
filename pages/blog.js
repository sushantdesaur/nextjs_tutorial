

import MainNav from "../components/nav/MainNav"

import { Container, Row, Col } from "react-bootstrap"

const Blog = () => {
    return (
        <>
            <MainNav/>
            <Container>
                <Row>
                    <Col>
                        Blog Page
                    </Col>
                </Row>
            </Container>
        </>
     )
}

export default Blog