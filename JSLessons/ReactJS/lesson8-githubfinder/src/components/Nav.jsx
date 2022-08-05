import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-primary ">
          <div className="container">
            <a
              className="navbar-brand text-light"
              href={this.props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class={this.props.icon}></i>
              {this.props.title}
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
