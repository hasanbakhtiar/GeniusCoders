import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { 
    isEmpty, 
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart
   } = useCart();

  if (isEmpty)
    return (
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif"
          alt="err"
        />
      </div>
    );
  return (
    <div className="container mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Del</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img width="40" src={item.img} alt="" />
                </td>
                <td>{item.brand}</td>
                <td>{item.price * item.quantity}$</td>
                <td>
                  <button
                    onClick={() => updateItemQuantity(item.id,item.quantity -1)}
                    className="btn  btn-danger"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                  onClick={() => updateItemQuantity(item.id,item.quantity +1)}
                  className="btn btn-success">+</button>
                </td>
                <td><button onClick={()=>{removeItem(item.id)}} className="btn btn-danger">X</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container">
        <button className="btn btn-danger mb-4" onClick={()=>{emptyCart()}}>Clear Cart</button>
      </div>
      <div className="container">
        <h4>Total Price: {cartTotal}$</h4>
      </div>
    </div>
  );
};

export default Cart;
