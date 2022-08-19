import React, { Component } from "react";
import configureStore from "../store/configureStore";
import { addBlog, removeBlog } from "../action/blogaction";
const store = configureStore();
// Dispatch Start
store.subscribe(()=>{
   console.log( store.getState());
})
const blog1 = store.dispatch(addBlog({addtitle:"Asus new laptop",adddesc:"this laptop is very good."}));
store.dispatch(addBlog({addtitle:"Acer new notebook",adddesc:"this notebook is very good."}));
// console.log(blog1.blog.id);
store.dispatch(removeBlog(({id:blog1.blog.id})))
// Dispatch End

export class BlogFundamentals extends Component {
  render() {
    return <div>BlogFundamentals</div>;
  }
}

export default BlogFundamentals;
