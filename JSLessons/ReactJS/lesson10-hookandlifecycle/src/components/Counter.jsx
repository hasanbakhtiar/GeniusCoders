// refce 
// reacct arrow function component export 
import React,{useState} from 'react'

const Counter = () => {
    const [deyer,hadise] = useState(0);
    const azalt =()=>{
        if (deyer > 0) {
            hadise(deyer-1)
        }
    }
    
  return (
    <div className='mt-5 container'>
            <button onClick={azalt} className='btn btn-primary mx-3'>-1</button>
            {/* <button onClick={()=>{
                deyer > 0 ?
                hadise(deyer-1) : deyer;
            }} className='btn btn-primary mx-3'>-1</button> */}
            <span>{deyer}</span>
            <button onClick={()=>{hadise(deyer+1)}} className='btn btn-primary mx-3'>+1</button>
    </div>
  )
}

export default Counter
