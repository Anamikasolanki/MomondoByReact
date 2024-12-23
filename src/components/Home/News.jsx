import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function News() {
  return (
    <div className="news py-5">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center text-white py-5">
              SUBSCRIBE FOR OUR TRAVEL NEWSLETTERS
            </h1>
            <p className="text-white text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur itaque numquam possimus odit magni commodi
              voluptatibus amet distinctio esse nulla, voluptas necessitatibus
              facilis, quia delectus ducimus quae porro qui fuga.
            </p>

            <Row className="text-center mx-auto">
              <Col>
                <input className="form-control" type="text" />
              </Col>
            </Row>
            <Row className="text-center my-4">
              <Col>
                <Button className="w-50">Search</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default News;
