import React from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard";
import Preferences from "./Preferences/Preferences";

export default function Header() {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-4">
      <div className="container">

        <li className="nav-item">
        <Link  className="nav-link"to="/">Alcobook</Link>
        </li>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link  className="nav-link"to="/">Home
              <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link"to="#">About</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link"to="/preferences">preferences</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link"to="/Dashboard/Dashboard">DashBoard</Link>
            </li>


          </ul>
        </div>
    
      </div>
    </nav>
  );
}
