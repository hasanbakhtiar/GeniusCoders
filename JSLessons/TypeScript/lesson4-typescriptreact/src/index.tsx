import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const DataList = (props:any) =>{
  return(
    <li>{props.name}</li>
  )
}
const App =()=>{
  const [data,setData] = useState();
  useEffect(()=>{
  axios.get('https://restcountries.com/v3.1/all')
  .then((res:any)=>setData(res.data[0].name.common))
  // .then((res:any)=>console.log(res.data[0].name.common))
  .catch(err=>console.log(err))

},[])
  return(
  <ul>
   
    <DataList name={data}/>
  </ul>
  )
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

