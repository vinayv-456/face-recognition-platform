import { useState, useEffect } from 'react';
import './App.css';

//import components 
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

//imort client api
import axiosInstance from './apis/client'

import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import Home from './components/Home/Home';

function App(props) {
  const [userData, setUserData] = useState({});
  
  
  const onSubmitSignIn = async (email, password) => {
    const result = await axiosInstance.post('/sign-in', { email: `${email}`, password: `${password}` })
    console.log(result);
    if (result) {
      setUserData(result.data);
      props.history.push('/home')
    }
  }

  const handleSignUp = async (form) => {
    console.log(form)
    const result = await axiosInstance.post('/sign-up', { ...form })
    if (result) {
      setUserData(result.data);
      props.history.push('/home')
    }
  }

  return (
    <div className="container">
      <Switch>
        <Route path="/home"
          render={(props) => (
            <Home {...props} userData={userData} />
          )}
        />
        <Route
          path="/signin"
          render={(props) => (
            <Signin {...props} onSubmitSignIn={onSubmitSignIn} />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} handleSignUp={handleSignUp} />
          )}
        />

      </Switch>
    </div>
  );
}

export default withRouter(App);
