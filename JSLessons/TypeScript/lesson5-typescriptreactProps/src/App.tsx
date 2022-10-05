import React, { useState } from 'react'
import Product from './Product'
import Users from './User'
const productList = [
    {
        title:'test1',
        price:10
    },
    {
        title:'test2',
        price:20
    },
    {
        title:'test3',
        price:30
    },
    {
        title:'test4',
        price:40
    }
]

const App = () => {
    const [log,setLog] = useState(false)
  return (
    <div>
        <Product productTypes={productList} />
        <Users info='Zhala' messagesCount={10} isLoggedIn={log}  />
        <button onClick={()=>{setLog(true)}}>Login</button>
        <button  onClick={()=>{setLog(false)}}>Logout</button>
    </div>
  )
}

export default App