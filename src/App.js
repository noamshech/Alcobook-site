import './App.css';
import React from 'react';
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

import About from './Pages/About';
import UpLoadPost from './Pages/UploadPost';
import Register from './Pages/Login/Register';
import SearchComment from './components/SearchComment';

function App() {
  const { token, setToken } = useToken();

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
      <Header setToken={setToken} />

      <main className='container align-items-center'>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          
          <Route path='/post/:id'>
            <PostPage />
          </Route>

          <Route path='/editpost/:id'>
            <EditPost />
          </Route>

          <Route path='/searchcomment'>
            <SearchComment />
          </Route>

          <Route path='/uploadpost'>
            <UpLoadPost />
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
