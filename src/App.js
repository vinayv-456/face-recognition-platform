import './App.css';
import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';

//import components 
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

function App(props) {
  return (
    <div className="container">
      <Switch>
        <Route path="/home"
          render={(props) => (
            <Home {...props}/>
          )}
        />
        <Route
          path="/signin"
          render={(props) => (
            <Signin {...props}/>
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props}/>
          )}
        />

      </Switch>
    </div>
  );
}

export default withRouter(App);
