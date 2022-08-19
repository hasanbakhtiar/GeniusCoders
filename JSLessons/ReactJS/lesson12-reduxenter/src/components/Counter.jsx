import React, { Component } from 'react'
import { createStore } from 'redux';



const initialValue = {
    count:0
}

// Start Store
const store = createStore((state = initialValue,action)=>{
    // Reducer Start
        switch (action.type) {
            case "INCREMENT":
                return {
                    count: state.count + 1
                }
        
                case "DECREMENT":
                    return{
                        count: state.count - 1 
                    }

                    case "RESET":
                    return{
                        count: state.count - 1 
                    }
            default:
                return{
                    count:state.count
                }
        }
})


store.subscribe(()=>{
    console.log(store.getState());  
})
    store.dispatch({
        type:"INCREMENT"
    })

    store.dispatch({
        type:"RESET"
    })

    store.dispatch({
        type:"DECREMENT"
    })



export class Counter extends Component {
  render() {
    return (
      <div>Counter</div>
    )
  }
}

export default Counter