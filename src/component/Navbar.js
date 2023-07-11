import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";

function WebNavbar() {
  const additem = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Redux Cart Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          {/* End of the navbar  */}
          <Nav.Link style={{ marginRight: 30 }} href="/">
            Home
          </Nav.Link>
          <Nav.Link style={{ marginRight: 30 }} href="/cart">
            Cart
          </Nav.Link>
          <Nav.Link style={{ marginRight: 30 }} href="/total-item">
            Total Item <span>{additem.length}</span>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebNavbar;
