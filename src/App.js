import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';
export default function App() {
  return (
    <div>
      <Container>
        <Row>
          <h1>Sümeyye Nav</h1>
        </Row>
        <Row>
          <Col xs="3"><h2>Test1</h2></Col>
          <Col xs="9"><h2>Test2</h2></Col>
        </Row>
      </Container>
    </div>
  );
}
