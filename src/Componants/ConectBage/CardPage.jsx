import React from "react";
import Navbar1 from "../Navbar1";
import { CartProvider, useCart } from "react-use-cart";
import { Button, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Contact from "./Contact";
import { AlignCenter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ProductPage from "./../ProductPage";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();
  if (isEmpty)
    return (
      <p
        style={{ fontSize: "30px" }}
        className="justify-Contact-center text-center mt-5"
      >
        Your cart is empty
        <Link to="/Product"> {} Open Product Page </Link>
      </p>
    );
  return (
    <>
      <h1 className="text-center my-5">Cart ({totalUniqueItems})</h1>

      <Container className="justify-Contact-center text-center">
        {items.map((item) => (
          <Row 
            key={item.id}
            className=" border-bottom p-2 justify-content-around mb-2"
          >
            <Col sm={3} className="text-center">
              <img
                style={{ height: "150px", objectFit: "fill", width: "80%" }}
                src={item.images[0]}
                alt=""
              />
              <Row className="justify-content-around">
                <Button
                  className="col-2"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <Button
                  className="col-2"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </Row>
            </Col>
            <Col sm={6} className="align-items-start">
              <h4>{item.title}</h4>
              <p>{item.quantity} : Quantity</p>
              <p>{item.price} : Price</p>
              <p>{item.quantity * item.price} : TotalPrice</p>
              <Button onClick={() => removeItem(item.id)}>
                Remove Product
              </Button>
            </Col>
          </Row>
        ))}
        <p style={{ fontSize: "40px" }}>
          Total number of Items
          <span style={{ color: "red" }}>({totalItems}) </span>
          and Total price is 
          <span style={{ color: "red" }}>({cartTotal})</span>
        </p>
      </Container>
    </>
  );
};

export default function CardPage() {
  return (
    <>
      <CartProvider>
        <Navbar1 />
        <Cart />
      </CartProvider>
    </>
  );
}
