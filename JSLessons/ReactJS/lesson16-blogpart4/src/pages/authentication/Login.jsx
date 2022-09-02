import React, {useState} from 'react'
import admin from '../../data/admins';

const Login = props => {

    const [username, setUser] = useState();
    const [password, setPass] = useState();
    const [alert, setAlert] = useState();
    const [style, setStyle] = useState();
    const authenticationLogin =(e)=>{
            e.preventDefault();
        if (!username || !password) {
            setAlert("Fill out field");
            setStyle('alert alert-danger');

        }else{
            if (username === admin[0].username && password === admin[0].password) {
                props.history.push('/dashboard');
            }else{
                setAlert('passord or username is wrong!');
                setStyle('alert alert-danger');
            }
        }
    }
  return (
    <form className='container col-6' onSubmit={authenticationLogin}>
        <h1 className='text-center'>Login </h1>
        <h6 className={`text-center ${style}`}>{alert}</h6>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Username </label>
    <input onChange={(e)=>{
        setUser(e.target.value);
    }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={(e)=>{
        setPass(e.target.value);
    }}className="form-control" id="exampleInputPassword1"/>
  </div>
  {/* {username}|
  {password} */}

  <button type="submit" className="btn btn-primary">Enter</button>
</form>
  )
}

export default Login