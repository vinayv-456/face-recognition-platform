import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import userActions from '../../store/actions/user';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    if(!props.errMsg && props.name)
    {
      props.history.push('/home')
    }
  }, [props.errMsg, props.name])

  const handleSignUp = async (form) => {
    console.log(form)
    if(form.password === form.confirmPassword)
    {
      setError("");
      props.registerUser(form)
      setError(props.errMsg);
    }
    else
    {
      setError("passwords doesnot match, please try again!")
    }
  }

    return (
      <div>
        <div style={{display: 'flex', justifyContent:'center'}}>
          <div style={{display:'flex',  padding:'20px', flexDirection:'column', alignContent:'center', width:'30%', boxShadow:'0 0 10px grey'}}>
            <TextField
              label="Name"
              placeholder="name"
              margin="normal"
              onChange={onNameChange}
              fullWidth
            />
            <TextField
              label="Email"
              placeholder="Please Enter email"
              margin="normal"
              onChange={onEmailChange}
              fullWidth
            />
            <TextField
              label="password"
              placeholder="please enter password"
              margin="normal"
              onChange={onPasswordChange}
              fullWidth
            />
            <TextField
              label="Confirm password"
              placeholder="Re-Enter password"
              margin="normal"
              onChange={onConfPasswordChange}
              fullWidth
              style={{marginBottom:'25px'}}
            />
            <Button 
              color="primary" 
              variant="contained" 
              onClick={()=>handleSignUp(form)}
            >
              Register
            </Button>
            {console.log(form)}
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