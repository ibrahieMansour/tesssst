import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Cart4,Bell,PersonCircle}  from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";


function Navbar1() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand to="/">
            <img className="nav_img" alt="" src="../img/apple-icon.png" />
            <span className="text-dark h4">Purple </span>
            <span className="text-primary h4">Buzz </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-5 align-item-center  text-center flex-fill  d-lg-flex justify-content-lg-between">
              <NavLink className=" rounded-pill btn"  to="/">Home</NavLink>
              <NavLink className="rounded-pill  btn" to="/About" >About</NavLink>
              <NavLink className="btn rounded-pill " to="/Work">Work</NavLink>
              <NavLink className=" btn rounded-pill" to="/Pricing">Pricing</NavLink>
              <NavLink className=" btn rounded-pill " to="/Contact">Contact</NavLink>
              <NavLink className=" btn rounded-pill " to="/Product">Products</NavLink>
              <Row className=" justify-content-between">
                
              <Link className="col-3" to="/">
                <Bell color="royalblue" size={20} />
              </Link>
              <Link className="col-3" to="/">
                <PersonCircle color="royalblue" size={20} />
              </Link>
              <Link className="col-6 " style={{fontSize:"50x !important" }} to="/CartPage">
                <Cart4 color="royalblue" size={20} />{" "}
              </Link>
            </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Navbar1;
