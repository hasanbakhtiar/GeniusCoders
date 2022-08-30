import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import BlogList from "./pages/BlogList";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addBlog, editBlog, removeBlog } from "./action/blogaction";
import AppRouter from "./routers/AppRouter";
const store = configureStore();
// Dispatch Start
store.subscribe(()=>{
   console.log( store.getState());
})
// const blog1 = store.dispatch(addBlog({addtitle:"Asus new laptop",adddesc:"this laptop is very good."}));
// const blog2 = store.dispatch(addBlog({addtitle:"Acer new notebook",adddesc:"this notebook is very good."}));
// console.log(blog1.blog.id);
// store.dispatch(removeBlog(({id:blog1.blog.id})))
// store.dispatch(editBlog(blog2.blog.id,{title:'ahjsdgakdj'}))

// store.dispatch(addBlog({addimg:"https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",addtitle:"Asus new laptop",adddesc:"this laptop is very good."}));

// store.dispatch(addBlog({addtitle:"Asus new laptop",adddesc:"this laptop is very good."}));

// store.dispatch(addBlog({addtitle:"Asus new laptop",adddesc:"this laptop is very good."}));

// store.dispatch(addBlog({addtitle:"Asus new laptop",adddesc:"this laptop is very good."}));

// store.dispatch(addBlog({addtitle:"Asus new laptop",adddesc:"this laptop is very good."}));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter />
    </Provider>
  </React.StrictMode>
);
