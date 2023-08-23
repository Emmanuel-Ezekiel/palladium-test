/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./features/counter/productSlice";
import ListProducts from "./components/ListProducts";
import "./App.scss"
// import styles from './Counter.module.css'

export function App() {
  const dispatch = useDispatch();
  const [products, setProducts] = React.useState({
    productId: "",
    productName: "",
    productType: "",
    productDescription: "",
    status: "",
    dateCreated: "",
  });

  // this function handles submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(products));

    // clear the state fiel
    setProducts({
      productId: "",
      productName: "",
      productType: "",
      productDescription: "",
      status: "",
      dateCreated: "",
    });
  };

  // this function handles change input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducts((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "50px",
      }}

      className="App"
    >
      <h1>Create Product</h1>
      <form
        onSubmit={handleSubmit}
        className="inputForm"
      >
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          className="inputGroup"
      
          value={products.productId}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="inputGroup"
          value={products.productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="productType"
          placeholder="Product Type"
          className="inputGroup"
          value={products.productType}
          onChange={handleInputChange}
        />
        <textarea
          name="productDescription"
          style={{ width: "350px", height: "50px", border: "1px solid", borderRadius: "8px", padding: "5px"}}
          placeholder="Product Description"
          value={products.productDescription}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="inputGroup"
          name="status"
          placeholder="status"
          value={products.status}
          onChange={handleInputChange}
        />
        <input
           className="inputGroup"
          type="date"
          name="dateCreated"
          placeholder="Date Created"
          value={products.dateCreated}
          onChange={handleInputChange}
        />

        <button type="submit" style={{ width: "100px", height: "50px", borderRadius: "8px"}}> Add Product</button>
      </form>

      <ListProducts />
    </div>
  );
}
export default App;

// Your task:
// 1.    Create a simple functional Product List Application
// a.    Create a Product with the following parameters (Product Id, Product Name, Product Type, Product Description, Status, Date Created)
// b.    List the Product that was created.
// c.    Viewing of a Product list
