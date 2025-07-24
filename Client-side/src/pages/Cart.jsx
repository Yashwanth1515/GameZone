import React, { useContext } from 'react';
import { CartContext } from '../useContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = () => {
  const { cartitems, handleRemove } = useContext(CartContext);


  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      <Link to="/" style={{ display: 'block', marginBottom: '20px' }}>
        Back to Games
      </Link>
      {cartitems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartitems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
              className='maincon'
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100px', height: 'auto', borderRadius: '5px' }}
              />
              <div className='cartitem'>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <div className="rbtn">
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <h3>
            Cart Total: $
            {cartitems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;