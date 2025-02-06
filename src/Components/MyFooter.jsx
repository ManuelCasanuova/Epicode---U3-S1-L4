import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid>
      <Row className="bg-black">
        <Col md="6">
          <p className="text-white">&copy Libreria 2000</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
