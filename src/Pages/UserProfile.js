import React, { useEffect, useRef, useState } from 'react';
import serverURL, { deleteData, getData, patchData } from '../server';
import useToken from './Login/useToken';


function UserProfile({ id }) {
  const { token, setToken } = useToken();
  const [edit, setEdit] = useState(false);
  const [userDetails, setUserDetails] = useState({ username: '', role: '' });
  const usernameEl = useRef(null);
  const roleEl = useRef(null);
  const isAdmin = token.user.role === 'Admin';


  useEffect(() => {
    async function getUser(id) {
      const user = await getData(`${serverURL}/api/user/${id}`);

      setUserDetails(user);
    }

    getUser(id);
  }, [id]);

  return (
    <section>
      <h1>{edit ? <input type='text' ref={usernameEl} defaultValue={userDetails.username} /> : userDetails.username}</h1>
      <h2>{edit ? <input type='text' ref={roleEl} defaultValue={userDetails.role} /> : userDetails.role}</h2>
      {isAdmin && <button className="btn" onClick={() => setEdit(state => !state)}>{edit ? 'discard' : 'edit'}</button>}
      {isAdmin && edit && <button className="btn" onClick={async () => {
        const change = { user: token.user };
        const username = usernameEl.current.value;
        const role = roleEl.current.value;

        if (role !== userDetails.role) {
          change.user.role = role;
        }
        if (username !== userDetails.username) {
          change.user.username = username;
        }
        
        await patchData(`${serverURL}/api/user/${id}`, token.user.token, change);
        setUserDetails({ username, role });
        setEdit(false);
        if (token.user._id === id) {
          setToken({ ...token, ...change });
        }
      }}>save</button>}

      {isAdmin && <button className="btn" onClick={() => { deleteData(`${serverURL}/api/user/${id}`, token.user.token, { user: token.user }); localStorage.clear(); setToken(''); }}>Delete</button>}
    </section>
  );
}

export default UserProfile;
