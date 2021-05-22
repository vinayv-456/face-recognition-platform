import React, { useState } from 'react';

const Signin = ({onSubmitSignIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <div style={{display:'flex', flexDirection:'column', alignContent:'center', width:'50%'}}>
        Email:
        <input type="text" onInput={onEmailChange} style={{marginBottom:'10px'}}/>
        password:
        <input type="password" onInput={onPasswordChange} style={{marginBottom: '20px'}}/>

        <button onClick={()=>onSubmitSignIn(email, password)}>SignIn</button>
      </div>
    </div>
  );
}


export default Signin;