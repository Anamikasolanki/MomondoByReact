import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fun from "../../jsonApi/Fun.json";
import "font-awesome/css/font-awesome.min.css"

function Fun() {
  return (
    <div className="bg-fun">
      <h1 className="fw-bold text-center text-white py-5">
        SOME FUN WE COVERED
      </h1>
      <Container className="pb-5">
        <Row>
          {
            fun.map((item, index)=>{
              return(
                <Col md={4} lg={2} key={index} className="mb-4">
                  <div className="bg-dark p-3 text-center text-white">
                    <i className={`${item.icon} fw-bold fs-10`}></i>
                    <p className="fw-bold">{item.meter}</p>
                    <p className="text-white">{item.name}</p>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default Fun;
