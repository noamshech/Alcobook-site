import './App.css';
import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import Header from './components/Header';
import Footer from './components/footer';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import PostPage from './Pages/Post';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './Pages/Login/Login';
import PropTypes from 'prop-types';
import useToken from './Pages/Login/useToken';
import EditPost from './Pages/EditPost';
import serverURL from './server';

import About from './Pages/About';
import UpLoadPost from './Pages/UploadPost';
import Register from './Pages/Login/Register';

const socket = socketIOClient(`${serverURL}`, {
  withCredentials: true,
});

function App() {
  const { token, setToken } = useToken();
  const [response, setResponse] = useState('');

  useEffect(() => {
    socket.connect();

    socket.on('online', (data) => {
      setResponse(data);
    });

    return socket.disconnect;
  }, []);

  if (!token) {
    return (
      <HashRouter>
        <Switch>
          <Route path='/register'>
            <Register setToken={setToken} />
          </Route>

          <Route path='/'>
            <Login setToken={setToken} />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
  return (
    <HashRouter>
      <Header setToken={setToken} online={response.online?.length} />

      <main className='container align-items-center'>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          {
            //todo do react router for special id
          }
          <Route path='/post/:id'>
            <PostPage />
          </Route>

          <Route path='/editpost/:id'>
            <EditPost />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          <Route path='/uploadpost'>
            <UpLoadPost />
          </Route>

          <Route path='/preferences'>
            <Preferences />
          </Route>

          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
      </main>

      <Footer />
    </HashRouter>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default App;
