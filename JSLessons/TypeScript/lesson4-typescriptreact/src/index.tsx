import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
const DataList = (props:any) =>{
  return(
    <li>{props.fd}</li>
  )
}
const App =()=>{
  const [data,setData] = useState("New");

  return(
    <h1>
      <DataList fd={data}/> 
    </h1>
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

