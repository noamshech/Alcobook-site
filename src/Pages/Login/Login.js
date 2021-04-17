import React, { useState } from 'react';
import './Login.css';
import serverURL, { postData } from '../../server';
import { Link } from 'react-router-dom';
import Logo from '../../Resorces/Logo.png';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await postData(`${serverURL}/api/login`, null, {
      user: {
        username,
        password,
      },
    });

    if (token.error) {
      alert('Username or password are wrong');
    } else {
      setToken(token);
    }
  };

  return (
    <div className='login-wrapper'>
      <div>
        <img
          className='img-responsive'
          src={Logo}
          alt='logo'
          style={{ height: '50px' }}
        />
      </div>

      <h1>Please Log In</h1>
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
            Log in
          </button>
        </div>
      </form>

      <h1>Dont have a user yet?</h1>
      <h2>No problem!! sign up now for as low as 4 bitcoins!!!</h2>

      <Link className='nav-link' to='/register'>
        <div type='button' className='btn btn-info' style={{ color: 'black' }}>
          Register
        </div>
      </Link>
    </div>
  );
}
