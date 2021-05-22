import React, { useState, useEffect } from 'react';

const Register = ({ handleRoute, handleSignUp }) => {
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

  

    return (
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
    );
  }


export default Register;