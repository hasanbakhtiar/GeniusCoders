import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from '../components/Nav';
import BlogDetails from '../pages/blogdetails/BlogDetails';
import BlogList from '../pages/BlogList';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Route path="/blog" exact component={BlogList}></Route>
    <Route path="/blog/:id"  component={BlogDetails}></Route>
    
    </BrowserRouter>
  )
}

export default AppRouter