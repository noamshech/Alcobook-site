import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import PostPage from './Pages/Post';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './Pages/Login/Login';
import PropTypes from 'prop-types';
import useToken from './Pages/Login/useToken';
import PostSummery from './components/PostSummery';


 
 

function App() {
  const { token, setToken } = useToken ();
 
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="container align-items-center" >
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            {//todo do react rauter for speacil id
            }
            <Route path="/post">
              <PostPage />
            </Route>

            
            <Route path="/preferences">
              <Preferences />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>


        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
export default App;
