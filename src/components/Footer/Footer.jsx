import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import foot from "../../jsonApi/Footer.json";
import footCity from "../../jsonApi/FooterCity.json";
import footSite from "../../jsonApi/footSite.json";
import footSite2 from "../../jsonApi/footSite2.json";
import foot1 from "../../../public/img/foot1.png";
function Footer() {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <h4 class="text-white fw-bold">Top Countries</h4>
            <ul class="list-unstyled">
              {foot.map((item, index) => {
                return (
                  <li key={index}>
                    <span class="text-secondary">Flights to</span>{" "}
                    <a
                      href="javascript:void()"
                      class="text-white text-decoration-none"
                    >
                      {item.link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={4} md={6}>
            <h4 class="text-white fw-bold">Top Cities</h4>
            <ul class="list-unstyled">
              {footCity.map((item, index) => {
                return (
                  <li>
                    <span class="text-secondary">Flights to</span>{" "}
                    <a
                      href="javascript:void()"
                      class="text-white text-decoration-none"
                    >
                      NewYork,
                    </a>
                    <span class="text-secondary">United States</span>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={4} md={12}>
            <Row>
              <h4 class="text-white fw-bold">International Sites</h4>
              <Col md={6}>
                <ul class="list-unstyled">
                  {footSite.map((item, index) => {
                    return <li class="text-secondary">Billige Flybilletter</li>;
                  })}
                </ul>
              </Col>
              <Col md={6}>
                <ul class="list-unstyled">
                  {footSite2.map((item, index) => {
                    return <li class="text-secondary">Billige Flybilletter</li>;
                  })}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <img src={foot1} className="img-fluid" alt="" />
          </Col>
          <Col sm={10}>
            <Row>
                  <ul class="list-unstyled d-md-flex mt-5 pt-4 text-center list">
                <li class="col text-white">About Us</li>
                <li class="col text-white">Jobs</li>
                <li class="col text-white">Press</li>
                <li class="col text-white">Affilate</li>
                <li class="col text-white">Terms of Use</li>
                <li class="col text-white">Privacy Policy</li>
                <li class="col text-white">Cookies</li>
                <li class="col text-white">Airlines</li>
                <li class="col text-white">Aaps</li>
                <li class="col text-white">Helps</li>
              </ul>
            </Row>
          </Col>
        </Row>
        <Row>

          <Col className="text-center">
            <p className="text-white py-2">Momondo.co.uk is a free, independent global travel search site comparing billions of cheap flights, hotels and car hire deals.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
