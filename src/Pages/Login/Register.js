import React, { useState } from 'react';
import './Login.css';
import serverURL, { postData } from '../../server';
import { Link } from 'react-router-dom';
import Logo from '../../Resorces/Logo.png';

export default function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await postData(`${serverURL}/api/register`, null, {
      username,
      password,
    });

    if (token.error) alert('User taken, try something, more... unique...');
    else {
      alert('User created successfully');
      window.location.href = '/';
    }
  };

  return (
    <div className='login-wrapper'>
      <div>
        <img src={Logo} alt=''></img>
      </div>

      <h1>Register</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type='text' onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button
            type='submit'
            className='btn btn-info'
            style={{ color: 'black' }}
          >
            register
          </button>
        </div>
      </form>

      <h1> have a user yet?</h1>
      <Link className='nav-link' to='/'>
        <div type='button' className='btn btn-info' style={{ color: 'black' }}>
          Sign in
        </div>
      </Link>
    </div>
  );
}
