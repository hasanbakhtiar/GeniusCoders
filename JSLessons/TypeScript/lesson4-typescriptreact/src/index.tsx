import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
type DataFetch ={
  fechdata: any
}

const App =()=>{
  const [info,setInfo] = useState<DataFetch>();
  useEffect(()=>{
  axios.get('https://restcountries.com/v3.1/all')
  .then((res:any)=>setInfo({fechdata:res.data}))
  .catch(err=>console.log(err))
//   .then((res:any)=>{
//     res.data.map((fd:any)=>{
// console.log(fd.name);

//     })
//   })

},[])
  return(
 <div>
  <ul>
    {
      info?.fechdata.map((fd:any)=>(<li key={fd.id}>{fd.name}</li>))
    }
  </ul>
 </div>
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

