import React from "react";
import { Nav, NavDropdown, Container, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../public/img/logo.png";
import { Link } from "react-router-dom";
import menu from "../../jsonApi/Menu.json";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-deepPurple navbar-dark">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand href="/">
              <img src={logo} className="img-fluid" alt="hi" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menu.map((items, index) => {
                return (
                  <Link to={items.link} key={index} className="text-white text-decoration-none">
                    {items.menu}
                  </Link>
                );
              })}
            </Nav>
            <div className="d-flex text-white">
              <NavDropdown
                title="Language"
                id="navbarScrollingDropdown"
                className="me-4"
              >
                <NavDropdown.Item href="#action3" className="text-black">
                  English
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="text-black">
                  Hindi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="text-black">
                  Marathi
                </NavDropdown.Item>
              </NavDropdown>
              <Link to={"/login"} className="text-warning text-decoration-none">
                Login
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
