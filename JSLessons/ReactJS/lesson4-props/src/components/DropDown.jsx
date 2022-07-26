import React, { Component } from 'react'
class DropDown extends Component {
  render() {
    return (
                
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {this.props.modelname}
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">{this.props.modelone}</a></li>
          <li><a className="dropdown-item" href="#">{this.props.modeltwo}</a></li>
          <li><a className="dropdown-item" href="#">{this.props.modelthree}</a></li>
        </ul>
      </li>
    )
  }
}

export default DropDown