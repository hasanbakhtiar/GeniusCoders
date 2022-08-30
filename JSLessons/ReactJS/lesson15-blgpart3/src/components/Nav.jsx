import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">GeniusBlog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' exact  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' to="/blog">Blogs</NavLink>
        </li>
    </ul>
    <div class="d-flex" role="search">
        <Link class="btn btn-outline-warning" to='/dashboard'>Dashboard</Link>
      </div>
    
    </div>
  </div>
</nav>
  )
}

export default Nav