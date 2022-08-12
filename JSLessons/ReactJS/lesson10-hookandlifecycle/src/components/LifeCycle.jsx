import React, { useEffect,useState } from "react";



// const LifeCycle =()=>{
//     const [count,setCount]=useState(0) 
//     useEffect(()=>{
//         console.log("useEffect is runnning...");
//     },[count])
//         return(
//             <div>
//                 <button onClick={()=>{setCount(count+1)}}>+</button>
//                 <span>{count}</span>
//             </div>
//             )
// }




















// export default LifeCycle;







// 
// class LifeCycle extends Component {
//   componentDidMount() {
//     // console.log('componentDidMount is running');
//     setTimeout(() => {
//       return document.write("Hello");
//     }, 2000);
//   }

//   constructor(props) {
//     super(props);
//     this.increment = this.increment.bind(this);
//     // console.log("constructor is running...");
//     this.state = {
//         count: 0
//     }
//   }
//   componentDidUpdate(){
//     console.log("componentDidUpdate is active");
//     document.querySelector('h1').style.color = "red";
//   }
//   increment(){
//     this.setState({
//         count:this.state.count + 1
//     })
//   }
//   render() {
//     return (<div className="container mt-5">
//         <h1>Hello</h1>
//         <button onClick={this.increment}>+1</button>
//         <span className="ms-3">{this.state.count}</span>
//     </div>);
//   }
// }

// class ComponentOne extends Component {
 
//   // Defining the componentWillUnmount method
//   componentWillUnmount() {
//     alert('The component is going to be unmounted');
//   }
 
//   render() {
//     return <h1>Hello Geeks!</h1>;
//   }
// }
 
// class LifeCycle extends Component {
//   state = { display: true };
//   delete = () => {
//     this.setState({ display: false });
//   };
 
//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <ComponentOne />;
//     }
//     return (
//       <div>
//         {comp}
//         <button onClick={this.delete}>
//           Delete the component
//         </button>
//       </div>
//     );
//   }
// }
 

// export default LifeCycle;
