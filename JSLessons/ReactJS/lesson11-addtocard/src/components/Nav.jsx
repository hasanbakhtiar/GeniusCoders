import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Nav = () => {
  const {totalItems} = useCart();
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">T-Shirt Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname="active"  to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeclassname="active"  to="/products">Products</NavLink>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <Link className="btn btn-outline-success" to="/cart">Cart ({totalItems})</Link>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Nav