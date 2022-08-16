import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold">Hello, you here in T-Shirt Shop)))</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Powered by React JS</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link className="btn btn-primary btn-lg px-4 gap-3" to="/products">Shop now</Link>
      </div>
    </div>
  </div>
  )
}

export default Home