import React from 'react';

export default function Dashboard({ myPosts }) {

  //const r = window.confirm("Do you really want to Sign Out?"); if(r == true)

  return (
    <div>

      <h2>Dashboard</h2>

      <form>
        <button type="submit" className="btn btn-danger" onClick={(() => { localStorage.clear(); })} >LogOut</button>
      </form>
    </div>
  );
}

