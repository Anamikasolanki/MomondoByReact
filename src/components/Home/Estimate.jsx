import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Estimate() {
  return (
    <div className="bg-deepPurple py-5">
      <Container>
        <h1 className="fw-bold text-center text-white pt-5">
          GET A QUICK ESTIMATE!
        </h1>
        <p className="fw-bold text-center text-white">
          GET A PROFESSIONAL HELP
        </p>
        <Row>
            <Col className="my-2">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
            <Col className="my-2">
              <input className="form-control" type="date" />
            </Col>
            <Col className="my-2">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
            <Col className="my-2">
              <input className="form-control" type="email" name="email" id="email" placeholder="Enter email" />
            </Col>
            <Col className="my-2">
              <Button variant="warning" type="submit">CALCULATE NOW</Button>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Estimate;
