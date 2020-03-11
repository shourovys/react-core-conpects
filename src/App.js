import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const productItem = [
    { name: "Photo shop", price: "4404.99" },
    { name: "Photo sioosp", price: "44840.99" },
    { name: "Photo sholdlp", price: "478440.99" },
    { name: "Photo shodsklp", price: "44950.99" }
  ];

  return (
    <div className="App">
      <Product product1={productItem[0]}></Product>
      <Product product1={productItem[1]}></Product>
      <Product product1={productItem[2]}></Product>
      <Product product1={productItem[3]}></Product>
      <Product product1={productItem[2]}></Product>
      <Product product1={productItem[2]}></Product>
      <Product product1={productItem[2]}></Product>
      <Product product1={productItem[2]}></Product>
      <Product product1={productItem[2]}></Product>
      <Product product1={productItem[2]}></Product>
    </div>
  );
}

function Product(props) {
  const { name, price } = props.product1;
  console.log(name, price);

  return (
    <div className="box">
      <h3 style={{ fontSize: "1.9rem", margin: "8px 5px" }}>{name}</h3>

      <h1>{price}</h1>

      <button className="buy-btn">buy now</button>
    </div>
  );
}

export default App;
