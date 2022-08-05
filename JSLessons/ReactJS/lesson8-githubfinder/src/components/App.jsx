import React, { Component } from "react";
import Nav from "./Nav";
import Search from "./Search";
import Users from "./Users";
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.searchUser = this.searchUser.bind(this);
    this.state={
      users:[]
    }
  }
  searchUser(keyword){
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then((res)=>this.setState({users:res.data.items}))
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div>
        <Nav
          url="https://github.com"
          icon="fa-brands fa-github"
          title=" Github"
        />
        <Search searchValue={this.searchUser} />
        <Users uservalue={this.state.users} />
        
      </div>
    );
  }
}

export default App;
