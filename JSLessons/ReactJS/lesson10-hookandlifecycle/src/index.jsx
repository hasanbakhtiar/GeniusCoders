import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Counter from "./components/Counter";
import LifeCycle from "./components/LifeCycle";


// stateless component or function component
// function App (){
//   return(
//     <h1>Hello1</h1>
//   )
// }


const App =()=>{
  return(
    <LifeCycle />
  )
}




// satetfull component or class component
// class App extends Component{
//   render(){
//     return(
//       <h1>Hello</h1>
//     )
//   }
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
