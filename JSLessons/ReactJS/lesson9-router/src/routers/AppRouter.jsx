import React, { Component } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav/>
     <div className="container mt-5">
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
     </div>
     <Footer/>
      </BrowserRouter>
    )
  }
}

export default AppRouter