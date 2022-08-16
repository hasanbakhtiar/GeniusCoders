import React from "react";
import { useCart } from "react-use-cart";

const ProductItem = ({brandname,color,size,price,photo,addproduct}) => {
  const {addItem} = useCart();
  
  return (
    <div className="card col-12 col-sm-6 col-md-4" >
      <img height="300" src={photo} className="card-img-top" alt={photo}  />
      <div className="card-body">
        <h5 className="card-title">{brandname}</h5>
        <p className="text-success card-text">
         <span className="text-dark">color:</span>{color}
        </p>
        <p className="text-success card-text">
        <span className="text-dark">size:</span>{size}
        </p>
        <p className="text-success card-text">
        <span className="text-dark">price:</span>{price}$
        </p>
        <button onClick={()=>{addItem(addproduct,alert('add successfully'))}} type="button"  className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
