/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/counter/productSlice";

const ListProducts = () => {
  const products = useSelector(selectProducts);

  console.log(products);
  return (
    <div>
      <div className="list">
        <div className="head">
          <h1>product Id</h1>
          <h1>product Name</h1>
          <h1>product Type</h1>
          <h1>product Description</h1>
          <h1>status</h1>
          <h1>date Created</h1>
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
