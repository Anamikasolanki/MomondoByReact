import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../../public/img/blog1.jpeg"
import blog2 from "../../../public/img/blog2.jpeg"

function Latest() {
  return (
    <div className="py-5">
      <Container>
        <h1 className="fw-bold text-center pt-5">LATEST BLOG</h1>
        <p className="fw-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          quisquam dicta neque pariatur recusandae minima in distinctio quasi.
          Magni eveniet quas voluptas saepe inventore quos corrupti libero
          minima voluptatem eos?
        </p>
        <Row className="py-5">
          <Col lg={6}>
            <Row className="text-center pb-4">
              <Col sm={4}>
                <img src={blog1} className="img-fluid" alt="fblog1" />
              </Col>
              <Col sm={8}>
              <h5>Feb 01, 2016</h5>
                  <h4>10 THINGS TODO BEFORE TRAVEL</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus sunt doloribus sequi sit sed quisquam cumque magnam praesentium beatae.</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
                <Row className="text-center">
                <Col sm={4}>
                  <img src={blog2} alt="blog2" className="img-fluid"/>
                </Col>
                <Col sm={8}>
                  <h5>jan 23, 2016</h5>
                  <h4>SAY NO TO LAZY LIFE</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus sunt doloribus sequi sit sed quisquam cumque magnam praesentium beatae.</p>
                </Col>
                </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Latest;
