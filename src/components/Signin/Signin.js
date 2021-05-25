import React, { useState } from 'react';
import { connect } from 'react-redux';
import userActions from '../../store/actions/user';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitSignIn = async (email, password) => {
    try{
      props.getUserDetails(email, password)
      if(!props.errMsg)
      {
        props.history.push('/home')
      }
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div>  
      <Navigation/>
      <Logo />
      <div style={{display: 'flex', justifyContent:'center'}}>
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', width:'50%'}}>
            Email:
            <input type="text" onInput={onEmailChange} style={{marginBottom:'10px'}}/>
            password:
            <input type="password" onInput={onPasswordChange} style={{marginBottom: '20px'}}/>
            
            <button onClick={()=>{onSubmitSignIn(email, password)}}>SignIn</button>
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
    getUserDetails: (email, password) => dispatch(userActions.signInUser({ email: `${email}`, password: `${password}` }))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);