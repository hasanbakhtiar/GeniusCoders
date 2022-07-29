import React, { Component } from "react";


class Counter extends Component{
    constructor(props){
        super(props);
        this.azalt = this.azalt.bind(this);
        this.artir = this.artir.bind(this);
        this.state = {
            say:0
        }
    }
    azalt(){
      if (this.state.say > 0) {
        this.setState({
            say: this.state.say - 1
        })
      }
    }

    artir(){
        this.setState({
            say: this.state.say + 1
        })
    }
    
    render(){
        return(
            <div className="container mt-5">
            <button className="btn btn-danger mx-3" onClick={this.azalt}>-1</button>
            <span>{this.state.say}</span>
            <button className="btn btn-success mx-3" onClick={this.artir}>+1</button>
     
            </div>
        )
    }
}

export default Counter;