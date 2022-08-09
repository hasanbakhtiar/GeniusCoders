import React, { Component } from "react";
import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <ul className="d-flex">
        <li>
          <Link className="mx-3" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="mx-3" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="mx-3" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    );
  }
}

class Home extends Component {
  render() {
    return <h1>Home</h1>;
  }
}

class About extends Component {
  render() {
    return <h1>About</h1>;
  }
}

class Contact extends Component {
  render() {
    return <h1>Contact</h1>;
  }
}

class NotFoundPage extends Component {
  render() {
    return <h1>NotFoundPage</h1>;
  }
}

class BasicRouterv6 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default BasicRouterv6;
