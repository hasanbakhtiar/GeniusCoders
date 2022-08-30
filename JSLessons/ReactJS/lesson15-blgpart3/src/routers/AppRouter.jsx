import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from '../components/Nav';
import BlogDetails from '../pages/blogdetails/BlogDetails';
import BlogList from '../pages/BlogList';
import Dashboard from '../pages/dashboard/Dashboard';
import AddBlogPage from '../pages/form/AddBlogPage';
import EditBlogPage from '../pages/form/EditBlogPage';
import HomePage from '../pages/HomePage';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Route path="/" exact component={HomePage}></Route>
    <Route path="/blog" exact component={BlogList}></Route>
    <Route path="/blog/:id"  component={BlogDetails}></Route>
    <Route path="/add" component={AddBlogPage}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/edit/:id' component={EditBlogPage}></Route>
    </BrowserRouter>
  )
}

export default AppRouter