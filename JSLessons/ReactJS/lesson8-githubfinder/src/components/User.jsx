import React, { Component } from 'react'

class User extends Component {
  render() {
    const {login,avatar_url,html_url,id} = this.props.puser;
    return (
 <div className="card col-12 col-sm-6 col-md-3" >
        <img src={avatar_url} className="card-img-top" alt="err" />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <p className="card-text">{id}</p>
          <a target="_blank" href={html_url} className="btn btn-primary">Go Profile</a>
        </div>
      </div>
    )
  }
}

export default User