import React, { Component } from 'react'


class BookState extends Component {
    constructor(props){
        super(props);
        this.nextBook = this.nextBook.bind(this);
        this.prevBook = this.prevBook.bind(this);
        this.state={
            bookimg:'https://static.insales-cdn.com/images/products/1/7007/171080543/large_429bdd4b82e25f5d8372e4d2bfe4534e.jpg',
            bookname:"1984",
            author: "George Orwell",
            booknumber: 301
        }

    }

    nextBook(){
        this.setState({
            bookimg:'https://altunkitab.az/storage/439/conversions/cinayet_ve_ceza-blade.jpg',
            bookname:"Cinayet ve ceza",
            author: "Dostoyevski",
            booknumber: 700
        })
    }
    prevBook(){
        this.setState({
            bookimg:'https://static.insales-cdn.com/images/products/1/7007/171080543/large_429bdd4b82e25f5d8372e4d2bfe4534e.jpg',
            bookname:"1984",
            author: "George Orwell",
            booknumber: 301
        })
    }
  render() {
    return (
      <div className='mt-5 container'>
        
      <div className="card" style={{width: '15rem'}}>
        <img src={this.state.bookimg} height="200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.state.bookname}</h5>
          <p className="card-text">{this.state.author}</p>
          <p className="card-text">{this.state.booknumber}</p>
        </div>
      </div>
          <button  onClick={this.nextBook} className=" mx-3 mt-5 btn btn-primary">Next Book</button>
          <button  onClick={this.prevBook} className=" mt-5 btn btn-primary">Prev Book</button>
      </div>
    )
  }
}

export default BookState