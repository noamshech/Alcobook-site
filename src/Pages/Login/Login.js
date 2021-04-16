import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { postData } from '../../server';

async function loginUser(credentials) {
   return fetch('http://localhost:8080/api/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
    body: JSON.stringify({user:credentials})
   })
    .then(data => data.json()) 

    //return postData("login",'',credentials);
   
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    });
    
    var noUser={"error": "No user."};
    
    setToken(token);
  
  }

  return (
   
    <div className="login-wrapper"  >
      <div>
        <img src="src/Resorces/Logo.png" alt=""></img>
        </div> 

      <h1>Please Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>

      <h1>Dont have a user yet?</h1>
      <h2>No problem!! sign up now for as low as 4 bitcoins!!!</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  )
}