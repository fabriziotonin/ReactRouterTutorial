import React, { useEffect, useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import User from './components/User';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';
import Admin from './components/Admin';
import LogIn from './components/LogIn';

function App() {

  const [ token, setToken ] = useState(localStorage.getItem('token') || null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() =>{
    if(token !== null){
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }
  },[token])
 
  return (
    <div>
      <Router>

        <Menu />        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={{
                pathname: "/about",
                state: { fromNavBar: true }
                }}>About</Link>
              </li>
            <li>
              <Link to="/users/7">Users</Link>
            </li>
            {
              isAuth
               ?
            (<li>
              <Link to="/admin">Ir a Admin</Link>
            </li>)
             :
            null
            }
            <li>
              <Link to="/login">LogIn</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/users/:id?">
            <User/>
          </Route>
          <Route exact path="/admin">
            {
              isAuth ? <Admin/> : <Redirect to="/login"/>
            }
            
          </Route>
          <Route exact path="/login" >
            <LogIn setToken={setToken} />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
