import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav';
import Login from '../pages/authentication/Login';
import BlogDetails from '../pages/blogdetails/BlogDetails';
import BlogList from '../pages/BlogList';
import Dashboard from '../pages/dashboard/Dashboard';
import AddBlogPage from '../pages/form/AddBlogPage';
import EditBlogPage from '../pages/form/EditBlogPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Switch>
    <Route path="/" exact component={HomePage}></Route>
    <Route path="/blog" exact component={BlogList}></Route>
    <Route path="/blog/:id"  component={BlogDetails}></Route>
    <Route path="/add" component={AddBlogPage}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/edit/:id' component={EditBlogPage}></Route>
    <Route path='/login' component={Login}></Route>
    <Route component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
  )
}

export default AppRouter