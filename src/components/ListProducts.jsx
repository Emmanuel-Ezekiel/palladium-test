/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../features/counter/productSlice'

const ListProducts = () => {
    const products = useSelector(selectProducts);

    console.log(products)
  return (
    <div>
        {products?.map((product) => (
            <div key={product.productId}>
                <ul>
                    <li>{product.productId}</li>
                    <li>{product.productName}</li>
                    <li>{product.productType}</li>
                    <li>{product.productDescription}</li>
                    <li>{product.status}</li>
                    <li>{product.dateCreated}</li>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default ListProducts;