/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/product/productSlice";

const ListProducts = () => {
  const products = useSelector(selectProducts);

  console.log(products);
  return (
    <div>
      <div className="list">
        <div className="head">
          <h1>Product Id</h1>
          <h1>Product Name</h1>
          <h1>Product Type</h1>
          <h1>Product Description</h1>
          <h1>Status</h1>
          <h1>Date Created</h1>
        </div>
        {products?.map((product) => (
          <div key={product.productId} className="body">
            <p>{product.productId}</p>
            <p>{product.productName}</p>
            <p>{product.productType}</p>
            <p>{product.productDescription}</p>
            <p>{product.status}</p>
            <p>{product.dateCreated}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
