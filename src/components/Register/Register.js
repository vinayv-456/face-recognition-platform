import React, { useState, useEffect } from 'react';

import axiosInstance from '../../apis/client'

const Register = ({ handleRoute }) => {
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

  const handleSignUp = async() => {
    console.log(form)
    const result = await axiosInstance.post('/sign-up', {...form})
    if(result)
    handleRoute("home");
  }

    return (
      <div style={{display: 'flex', justifyContent:'center'}}>
        <div style={{display:'flex', flexDirection:'column', alignContent:'center', width:'50%'}}>
          Name:
          <input type="text" onInput={onNameChange} style={{marginBottom:'10px'}}></input>
          Email:
          <input type="text" onInput={onEmailChange} style={{marginBottom:'10px'}}/>
          password:
          <input type="text" onInput={onPasswordChange} style={{marginBottom: '20px'}}/>

          <button onClick={handleSignUp}>Register</button>
        </div>
      </div>
    );
  }


export default Register;