import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { Logo, CartIcon } from "../global/images";
import { colors } from "../global/colors";
import useWindowMediaQuery from "../global/hooks/useMediaQuery";

const Header = () => {
  const screens = useWindowMediaQuery();
  return (
    <HeaderStyled>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={Logo} alt="food-spin" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {screens.md ? (
            <>
              <NavbarCollapse /> <NavbarCart />
            </>
          ) : (
            <>
              <NavbarCart /> <NavbarCollapse />
            </>
          )}
        </Container>
      </Navbar>
    </HeaderStyled>
  );
};

const NavbarCart = () => {
  return (
    <div>
      <Nav.Link href="/">
        <CartIcon />
      </Nav.Link>
    </div>
  );
};

const NavbarCollapse = () => {
  return (
    <Navbar.Collapse id="navbarScroll">
      <div className="ml-auto">
        <Nav
          className="ml-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#">Breakfast</Nav.Link>
          <Nav.Link href="#">Lunch</Nav.Link>
          <Nav.Link href="#">Dinner</Nav.Link>
        </Nav>
      </div>
    </Navbar.Collapse>
  );
};

const HeaderStyled = styled.div`
  .navbar-light .navbar-nav .nav-link {
    color: ${colors.textColor};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin: 0px 20px;
  }
  .navbar-collapse {
    flex-grow: 0.5;
  }
`;

export default Header;
