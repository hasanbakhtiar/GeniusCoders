import React, { Component } from "react";

class BookItem extends Component {
  render() {
    return (
      <div className="card col-12 col-sm-6 col-md-2" style={{width:"15.5rem"}}>
          <img src={this.props.sekil} class="card-img-top" alt="err"></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.kitabadi}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.yazici}</h6>
          <p className="card-text">Page number: {this.props.sehifesayi}</p>
        </div>
      </div>
    );
  }
}

export default BookItem;
