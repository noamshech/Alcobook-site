import React, { useState } from 'react';
import './Login.css';
import serverURL, { postData } from '../../server';
import { Link } from 'react-router-dom';

async function registerUser(credentials) {
  debugger
  return fetch('http://localhost:8080/api/register', {
    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username:credentials.username, password:credentials.password})
  })
    .then(data => data.json())

  //return postData("login",'',credentials);

}

export default function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    const token = await postData(`${serverURL}/api/register`, null, {
      username,
      password 
    });

   
    

    if (token.error)
        alert("User taken, try something, more... uniqe...")
    else    {
    alert("User created sucessfully")
    window.location.href = "/";
    }
  }

  return (

    <div className="login-wrapper"  >
      <div>
        <img src="src/Resorces/Logo.png" alt=""></img>
      </div>

      <h1>Register</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div >
          <button type="submit" className="btn btn-info" style={{ color: "black" }}>register</button>
        </div>
      </form>

      <h1> have a user yet?</h1>
      <Link className="nav-link" to="/" >
      <div type="button" className="btn btn-info" style={{ color: "black" }}>
        Sign in
      </div>
      </Link>
      
    </div >
  )
}