import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../Resorces/Logo.png';

export default function Header() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark sticky-top mb-4">
      <div className="container">

        <Link className="nav-link" to="/">
          <img className="img-responsive" src={Logo} alt="logo" style={{height: "50px"}} />
        </Link>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preferences">preferences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard/Dashboard">DashBoard</Link>
            </li>


          </ul>
        </div>

      </div>
    </nav>
  );
}
