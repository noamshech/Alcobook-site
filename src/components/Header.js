import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { Link } from 'react-router-dom';
import useToken from '../Pages/Login/useToken';
import Logo from '../Resorces/Logo.png';
import serverURL from '../server';

const socket = socketIOClient(`${serverURL}`, {
  withCredentials: true,
});

export default function Header({ setToken }) {
  const { token } = useToken();
  const [online, setOnline] = useState('');
  const isAdmin = token.user.role === 'Admin';

  useEffect(() => {
    socket.on('online', (data) => {
      console.log(data);
      setOnline(data);
    });

    return socket.close;
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark sticky-top mb-4'>
      <div className='container'>
        <Link className='nav-link' to='/'>
          <img
            className='img-responsive'
            src={Logo}
            alt='logo'
            style={{ height: '50px' }}
          />
        </Link>
        <div style={{ flex: '1', textAlign: 'center', fontWeight: 'bold' }}>
          Online users: {online.length}
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link className='nav-link' to='/uploadpost'>
                New Post
              </Link>
            </li>

            {isAdmin &&
              <li className='nav-item'>
              <Link className='nav-link' to={`/users`}>
                Users
              </Link>
            </li>
            }

            <li className='nav-item'>
              <Link className='nav-link' to={`/profile`}>
                Profile
              </Link>
            </li>

            {isAdmin && (
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href={`http://localhost:4200/?role=${token.user.role}&token=${token.user.token}&id=${token.user._id}&username=${token.user.username}`}
                >
                  DashBoard
                </a>
              </li>
            )}
            <li className='nav-item'>
              <Link
                className='btn btn-success'
                style={{ padding: '0.2rem' }}
                to='/'
                onClick={() => {
                  localStorage.clear();
                  setToken('');
                 
                }}
              >
                
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
