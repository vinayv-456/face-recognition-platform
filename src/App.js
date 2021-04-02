import {useState, useEffect} from 'react';
import './App.css';

//import components 
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
  return (
    <div className="container">
      <Navigation/>
      <Logo/>
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
      <FaceRecognition imageUrl={imageUrl}/>
    </div>
  );
}

export default App;
