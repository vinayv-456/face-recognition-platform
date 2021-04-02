import React, { useState, useEffect } from 'react';

import axiosInstance from '../../apis/client'

const Register = () => {
  const [form, setForm] = useState({}) 

  const onNameChange = (event) => {
    setForm(...form, {name: event.target.value})
  }

  const onEmailChange = (event) => {
    setForm(...form, {email: event.target.value})
  }

  const onPasswordChange = (event) => {
    setForm(...form, {password: event.target.value})
  }

  const onSubmitSignIn = async() => {
    console.log(form)
    const result = await axiosInstance.post('/sign-up', {...form})
  }

    return (
      <div>
        Name:
        <input type="text" onInput={onNameChange}></input>
        Email:
        <input type="text" onInput={onEmailChange}/>
        password:
        <input type="text" onInput={onPasswordChange}/>

        <button onClick={onSubmitSignIn()}>Register</button>
      </div>
    );
  }


export default Register;