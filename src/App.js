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

  return (
    <div className="container">
      <Navigation route={route} handleRoute={handleRoute}/>
      <Logo/>
      {
        route === "home"
        ?
        <div>
          <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
          <FaceRecognition imageUrl={imageUrl}/>
        </div>
        :
        <div>
          {
            route === 'register'
            ?
            <div>
              
              <Register handleRoute={handleRoute}/>
            </div>
            :
            <div>
              
              <Signin handleRoute={handleRoute}/>
            </div>
          }
        </div>
      }
      {console.log(route)}
    </div>
  );
}

export default App;
