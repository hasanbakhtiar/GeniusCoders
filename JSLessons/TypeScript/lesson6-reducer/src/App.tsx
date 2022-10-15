// import { useReducer } from "react"

// type CounterState={
//     count:number
// }
// type CounterAction={
//     type:string,
//     payload:number
// }

// const initalState = {count:0}

// function reducer(state:CounterState,action:CounterAction){
//     switch (action.type) {
//         case 'increment':
//                 return {count:state.count+action.payload};
//                 case 'decrement':
//                     return {count:state.count-action.payload};
//         default:
//             return {count:state.count}
//     }
// }   



// const App = () => {
//     const [state,dispatch] =  useReducer(reducer,initalState);
//   return (
//     <div>
//       <button onClick={()=>dispatch({type:'decrement',payload:1})}>-1</button>
//       <span style={{margin:"0px 10px"}}>{state.count}</span>
//       <button onClick={()=>dispatch({type:'increment',payload:1})}>+1</button>
//     </div>
//   );
// };

// export default App;



import { useReducer } from "react"

type CounterState={
    
    count:number
}
type ResetAction = {
    type:'reset'
}
type UpdateAction={
    type:'increment'| 'decrement',
    payload:number
}

type CounterAction = UpdateAction | ResetAction;

const initalState = {count:0}

function reducer(state:CounterState,action:CounterAction){
    switch (action.type) {
        case 'increment':
                return {count:state.count+action.payload};
                case 'decrement':
                    return {count:state.count-action.payload};

                    case 'reset':
                        return initalState;
        default:
            return {count:state.count}
    }
}   



const App = () => {
    const [state,dispatch] =  useReducer(reducer,initalState);
  return (
    <div>
      <button onClick={()=>dispatch({type:'decrement',payload:1})}>-1</button>
      <span style={{margin:"0px 10px"}}>{state.count}</span>
      <button onClick={()=>dispatch({type:'increment',payload:1})}>+1</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  );
};

export default App;

