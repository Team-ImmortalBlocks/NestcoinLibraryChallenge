import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Nestcoin Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="justify-content-center">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="justify-content-center">
              My Books
            </Nav.Link>
          </Nav>

          <Nav>
            <Button variant="primary">Connect Wallet</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
