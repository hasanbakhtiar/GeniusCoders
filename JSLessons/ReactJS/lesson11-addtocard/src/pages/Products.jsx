import React from 'react'
import ProductItem from './ProductItem'
import productsdata from '../data/data';

const Products = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        {productsdata.map((fd,i)=>{
          return <ProductItem 
          brandname={fd.brand}
          color={fd.color}
          photo={fd.img}
          size={fd.size}
          price={fd.price}
          addproduct={fd}
          key={i}
          />
        })}
      </div>
    </div>
  )
}

export default Products