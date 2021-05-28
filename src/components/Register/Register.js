import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import userActions from '../../store/actions/user';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Register = (props) => {
  const [form, setForm] = useState({}) 
  const [error, setError] = useState();

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

  const onConfPasswordChange = (event) => {
    setForm({...form, confirmPassword: event.target.value})
  }

  useEffect(()=>{
    console.log("err")
    setError(props.errMsg);
    if(!props.errMsg && props.name)
    {
      props.history.push('/home')
    }
  }, [props.errMsg])

  const handleSignUp = async (form) => {
    console.log(form)
    if(form.password === form.confirmPassword)
    {
      setError("");
      props.registerUser(form)
      console.log("props.errMsg", props.errMsg)
    }
    else
    {
      setError("passwords doesnot match, please try again!")
    }
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
            confirm password:
            <input type="password" onInput={onConfPasswordChange} style={{marginBottom: '20px'}}/>
            <button onClick={()=>handleSignUp(form)}>Register</button>
            {
              <p style={{textAlign: 'center', color:'red'}}>{error}</p>
            }
          </div>
        </div>
      </div>
    );
  }

function mapStateToProps(state){
  return{
    errMsg: state.errMsg,
    name: state.name
  }
}
function mapDispatchToProps(dispatch){
  return{
    registerUser: (form) => dispatch(userActions.registerUser({ ...form}))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);