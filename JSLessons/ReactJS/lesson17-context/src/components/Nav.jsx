import React,{useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'

const Nav = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Movies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " activeclassname="active" aria-current="page" to="/movies">Movies List:<span>{movies.length}</span></NavLink>
        </li>
     
      </ul>
      <form className="d-flex" role="search">
        <Link className="btn btn-outline-success" to="/add">Add Movies</Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav