import { useEffect, useReducer } from 'react';
import axios from 'axios'

import './App.css';
import { cartReducer } from './reducer/cartReducer'
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [ state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  })

  const fetchProduct = async() => {
    const { data } = await axios.get('https://dummyjson.com/products')
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products
    })
  }

  useEffect(() => {
    fetchProduct()
  },[])

  return (
    <>
      <h3 className='heading'>React Cost calculator Sample Project</h3>
      <div className='main'>
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
