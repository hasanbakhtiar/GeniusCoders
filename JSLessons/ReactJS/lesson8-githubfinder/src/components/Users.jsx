import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <div className="mt-5 container">
        <div className="row">
          {this.props.uservalue.map((fetchdata,i)=>(
            <User puser={fetchdata} key={i}/>
          ))}
        
        </div>
      </div>
    );
  }
}

export default Users;
