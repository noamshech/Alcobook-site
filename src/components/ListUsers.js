import React, { useEffect, useState } from 'react';
import useToken from '../Pages/Login/useToken';
import UserProfile from '../Pages/UserProfile';
import serverURL, { getData } from '../server';

export default function ListUsers() {
  const { token } = useToken();
  const isAdmin = token.user.role === 'Admin';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const users = await getData(`${serverURL}/api/user/`, token.user.token);

      setUsers(users);
    }

    getUsers();
  }, [token]);

  return (
    <div>
      <div className='container'>
        <div
          className='row'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isAdmin &&
            users.map((item, i) => (
              <UserProfile
                key={i}
                id={item._id}
              />
            ))}

        </div>
      </div>
    </div>
  );
}
