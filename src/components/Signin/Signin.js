import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {onSubmitSignIn} = props;
  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
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


export default Signin;