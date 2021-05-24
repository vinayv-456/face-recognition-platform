// import Reac from 'react'

import { useState } from "react";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Home = (props) => {
    const [imageUrl, setImageUrl] = useState('')
    const [tempInput, setTempInput] = useState('')
    
    const {userData} = props;

    const onInputChange = (e) => {
        setTempInput(e.target.value);
    }
  
    const onButtonSubmit = () => {
        setImageUrl(tempInput);
    }
    
    return(
        <div>
            <Navigation route={props.match.path}/>
            <Logo />
            <ImageLinkForm name={userData.name} score={userData.entries} onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
            <FaceRecognition imageUrl={imageUrl}/>
        </div>
    );
}

export default Home;