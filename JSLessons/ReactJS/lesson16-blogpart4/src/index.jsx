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
// const blog1 = store.dispatch(addBlog({title:"Asus new laptop",desc:"this laptop is very good."}));
// const blog2 = store.dispatch(addBlog({title:"Acer new notebook",desc:"this notebook is very good."}));
// console.log(blog1.blog.id);
// store.dispatch(removeBlog(({id:blog1.blog.id})))
// store.dispatch(editBlog(blog2.blog.id,{title:'ahjsdgakdj'}))

// store.dispatch(addBlog({img:"https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",title:"Asus new laptop",desc:"this laptop is very good."}));

store.dispatch(addBlog({img:"https://irshad.az/resized/fit540x550/center/products/78037/kfs2.jpg",title:"Asus new laptop",desc:"this laptop is very good."}));

store.dispatch(addBlog({title:"Asus new laptop",desc:"this laptop is very good."}));

store.dispatch(addBlog({title:"Asus new laptop",desc:"this laptop is very good."}));

store.dispatch(addBlog({title:"Asus new laptop",desc:"this laptop is very good."}));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter />
    </Provider>
  </React.StrictMode>
);
