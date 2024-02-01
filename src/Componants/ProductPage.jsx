import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar1";
import axios from "axios";
import { Col, Container,Row} from 'react-bootstrap';
import "../Componants/css/products.css"
import { Button } from 'react-bootstrap';
import { CartProvider, useCart } from "react-use-cart";

const Page=()=>{
  const { addItem } = useCart(); 
  
  const[count,setCount]=useState(1);
  const [productData, setProductData] = useState(null);
  useEffect(() => {
axios.get("https://dummyjson.com/products")
.then(res =>setProductData(res.data) )

    // Make actual fetch request 
    // fetch("https://dummyjson.com/products")
    //   .then(res => res.json())
    //   .then(data => {
    //     setProductData(data);
     // });
  }, []);
  
  return (
    <>
      
      <Container>
        <Row>
        {productData && productData.products.map(product => (
        <Col sm={6} md={4} lg={3} key={product.id} className="text-center code-card">
          {product.images[0] && (
            <img src={product.images[0]} alt={product.title} className="img-card" />
          )}
          <h4>{product.title}</h4>
          <h6>{product.price}</h6>
          <Button onClick={()=>{addItem (product,1)}}>Add to Card</Button>
          
        </Col>
      ))}
          
          
        </Row>
      </Container>
      
    </>
  );


}

const ProductPage= ()=> {
  return(
    <>
    <CartProvider>

    <Navbar1/>
    <Page/>
    </CartProvider>
    </>
  
  
  );
}
export default ProductPage;
