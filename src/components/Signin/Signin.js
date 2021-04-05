import React, { useState } from 'react';
import axiosInstance from '../../apis/client'


const Signin = ({handleRoute}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitSignIn = async() => {
    const result = await axiosInstance.post('/sign-in',{email: `${email}`, password: `${password}`})
    console.log(result);
    if(result)
    handleRoute("home");
  }

  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <div style={{display:'flex', flexDirection:'column', alignContent:'center', width:'50%'}}>
        Email:
        <input type="text" onInput={onEmailChange} style={{marginBottom:'10px'}}/>
        password:
        <input type="text" onInput={onPasswordChange} style={{marginBottom: '20px'}}/>

        <button onClick={onSubmitSignIn}>SignIn</button>
      </div>
    </div>
  );
}


export default Signin;