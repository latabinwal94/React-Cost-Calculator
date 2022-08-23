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
          {cart.some((p) => p.id === prod.id)
            ? <button
                className='btn remove-cart-btn'
                onClick={() => {
                  return dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: prod
                  })
                }}
              >
                Remove from Cart
              </button>
            : <button
                className='btn add-cart-btn'
                onClick={() => {
                  return dispatch({
                    type: 'ADD_TO_CART',
                    payload: {
                      id: prod.id,
                      thumbnail: prod.thumbnail,
                      qty: 1,
                      price: prod.price,
                      title: prod.title
                    }
                  })
                }}
              >
                Add to Cart
              </button>

          }
        </div>
      )}
    </div>
  )
}

export default Products
