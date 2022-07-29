import React, { Component } from "react";
import BookItem from "./BookItem";
import data from '../data/bookdata'

class BookList extends Component {
  render() {
    return (
      <>
        <div className="text-center mt-2">
          <h2>Book List</h2>
        </div>
        <div className="container mt-5">
          <div className="row gap-3">
         {data.info.map((value,index)=>{
        
           return   <BookItem sekil={value.bookimg} key={index} kitabadi={value.bookname} yazici={value.author} sehifesayi={value.pageNumber}/>
          
         })}
          
          </div>
        </div>
      </>
    );
  }
}

export default BookList;
