import React, { useState } from 'react'
import './cart.css'

const Cart = ({ state, dispatch }) => {
  const [total, setTotal] = useState(0)
  const { cart } = state

  const changeQty = (id, qty) => {
    dispatch({
      type: 'CHANGE_QTY',
      payload: {
        id,
        qty
      }
    })
  }

  React.useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  },[cart])

  return (
    <div className='cart-container'>
      <div className='cart-info'>
        <h3 className='cart-title'>Cart</h3>
        <b>Subtotal: $ {total}</b>
      </div>
      {cart.length > 0 
      ? cart.map ((data) => 
        <div className='prod-detail' key={data.id}>
          <img src={data.thumbnail} alt={data.title} className='cart-prod-img' />
          <div>
            <div>{data.title}</div>
            <div>$ {data.price}</div>
          </div>
          <div>
            <button onClick={() => changeQty(data.id, data.qty - 1)}>
              -
            </button>
            {data.qty}
            <button onClick={() => changeQty(data.id, data.qty + 1)}>+</button>
          </div>
        </div>
      )
      : <div style={{alignSelf: 'center', fontSize: '16px', marginTop: '30px'}}>Cart is empty</div>
    }
    </div>
  )
}

export default Cart
