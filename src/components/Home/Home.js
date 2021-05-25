// import Reac from 'react'

import { useState } from "react";
import { connect } from "react-redux";
import userActions from "../../store/actions/user";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Home = (props) => {
    const [imageUrl, setImageUrl] = useState('')
    const [tempInput, setTempInput] = useState('')

    const onInputChange = (e) => {
        setTempInput(e.target.value);
    }

    const onButtonSubmit = () => {
        setImageUrl(tempInput);
        props.updateUserScore(props.id)
    }
    
    return(
        <div>
            <Navigation route={props.match.path}/>
            <Logo />
            <ImageLinkForm name={props.name} score={props.score} onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
            <FaceRecognition imageUrl={imageUrl}/>
        </div>
    );
}
function mapStateToProps(state){
    return{
        id: state.id,
        name: state.name,
        score: state.entries
    }
}
function mapDispatchToProps(dispatch){
    return{
      updateUserScore: (id) => dispatch(userActions.updateUserScore({id: id}))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);