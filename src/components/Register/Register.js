import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import userActions from '../../store/actions/user';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Register = (props) => {
  const [form, setForm] = useState({}) 

  const onNameChange = (event) => {
    let name = event.target.value
    setForm({...form, name: name})
  }

  const onEmailChange = (event) => {
    setForm({...form, email: event.target.value})
  }

  const onPasswordChange = (event) => {
    setForm({...form, password: event.target.value})
  }

  const handleSignUp = async (form) => {
    console.log(form)
    props.registerUser(form)
    if(!props.errMsg)
    props.history.push('/home')
  }

    return (
      <div>
        <Navigation route={props.match.path}/>
        <Logo />
        <div style={{display: 'flex', justifyContent:'center'}}>
          <div style={{display:'flex', flexDirection:'column', alignContent:'center', width:'50%'}}>
            Name:
            <input type="text" onInput={onNameChange} style={{marginBottom:'10px'}}></input>
            Email:
            <input type="text" onInput={onEmailChange} style={{marginBottom:'10px'}}/>
            password:
            <input type="password" onInput={onPasswordChange} style={{marginBottom: '20px'}}/>
            <button onClick={()=>handleSignUp(form)}>Register</button>
          </div>
        </div>
      </div>
    );
  }

function mapStateToProps(state){
  return{
    errMsg: state.errMsg
  }
}
function mapDispatchToProps(dispatch){
  return{
    registerUser: (form) => dispatch(userActions.registerUser({ ...form}))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);