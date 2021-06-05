import './App.css';
import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import Navigation from "./components/Navigation/Navigation";
import Logo from './components/Logo/Logo';

//import components 
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import userActions from "./store/actions/user";

function App(props) {
  const onSignOut = () => {
    props.handleSignOut();
}

  return (
    <div className="container">
      <Navigation route={props.match.path} handleSignOut={onSignOut}/>
      <Logo />
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
        <Redirect from='/' to="/signin"></Redirect>
      </Switch>
    </div>
  );
}

function mapStateToProps(state){
  return;
}

function mapDispatchToProps(dispatch){
  return{
    handleSignOut: () => dispatch(userActions.handleSignOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
// export default withRouter(App);
