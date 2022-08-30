import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dashboardtem from './Dashboardtem'

const Dashboard = props => {
  return (
    <div className='container mt-5'>
        <Link className='btn btn-primary' to='/add'>Add</Link>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
  {props.pvalue.map((a, i) => {
          return <Dashboardtem count={i+1}  key={i} {...a} />;
        })}
    
  </tbody>
</table>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      pvalue: state.actionreducer,
    };
  };

export default connect(mapStateToProps)(Dashboard)