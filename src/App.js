import {useState, useEffect} from 'react';
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

function App() {
  const [tempInput, setTempInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [route, setRoute] =useState('signin')
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    axiosInstance.get('/users')
    .then(result => console.log(result.data))
    .catch(e=>console.log(e))
  }, [])

  const onInputChange = (e) => {
      setTempInput(e.target.value);
  }

  const onButtonSubmit = () => {
      setImageUrl(tempInput);
  }

  const handleRoute = (input) => {
    setRoute(input);
  }

  const onSubmitSignIn = async(email, password) => {
    const result = await axiosInstance.post('/sign-in',{email: `${email}`, password: `${password}`})
    console.log(result);
    if(result)
    {
      handleRoute("home");
      setUserData(result.data)
    }
  }

  const handleSignUp = async(form) => {
    console.log(form)
    const result = await axiosInstance.post('/sign-up', {...form})
    if(result)
    {
      handleRoute("home");
      setUserData(result.data)
    }
  }

  return (
    <div className="container">
      <Navigation route={route} handleRoute={handleRoute}/>
      <Logo/>
      {
        route === "home"
        ?
        <div>
          <ImageLinkForm name={userData.name} score={userData.entries} onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
          <FaceRecognition imageUrl={imageUrl}/>
        </div>
        :
        <div>
          {
            route === 'register'
            ?
            <div>
              <Register handleRoute={handleRoute} handleSignUp={handleSignUp}/>
            </div>
            :
            <div>
              <Signin handleRoute={handleRoute} onSubmitSignIn={onSubmitSignIn}/>
            </div>
          }
        </div>
      }
      {console.log(route)}
    </div>
  );
}

export default App;
