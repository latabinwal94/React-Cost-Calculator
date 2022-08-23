import React from 'react'
import './product.css'

const Products = ({ state, dispatch }) => {
  const { products, cart } = state
  console.log(products, 'products')

  return (
    <div className='product-container'>
      {products?.map((prod) => 
        <div className='product-data' key={prod.id}>
          <img
            src={prod.thumbnail}
            alt={prod.title}
            className='product-img'
          />
          <div className='product-info'>
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>
          <button className='btn add-cart-btn'>Add to Cart</button>
          <button className='btn remove-cart-btn'>Remove from Cart</button>
        </div>
      )}
    </div>
  )
}

export default Products
