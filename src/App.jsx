/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./features/counter/productSlice";
import ListProducts from "./components/ListProducts";
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
    >
      <h1>Create Product</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          style={{ width: "200px", height: "30px"}}
          value={products.productId}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          style={{ width: "200px", height: "30px"}}
          value={products.productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="productType"
          placeholder="Product Type"
          style={{ width: "200px", height: "30px"}}
          value={products.productType}
          onChange={handleInputChange}
        />
        <textarea
          name="productDescription"
          style={{ width: "200px", height: "50px"}}
          placeholder="Product Description"
          value={products.productDescription}
          onChange={handleInputChange}
        />
        <input
          type="text"
          style={{ width: "200px", height: "30px"}}
          name="status"
          placeholder="status"
          value={products.status}
          onChange={handleInputChange}
        />
        <input
        style={{ width: "200px", height: "30px"}}
          type="date"
          name="dateCreated"
          placeholder="Date Created"
          value={products.dateCreated}
          onChange={handleInputChange}
        />

        <button type="submit" style={{ width: "100px", height: "50px"}}> Add Product</button>
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
