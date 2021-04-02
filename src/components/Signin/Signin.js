import React, { useState } from 'react';
import axiosInstance from '../../apis/client'


const Signin = () => {
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
  }

    return (
      <div>
        <p>signIn</p>
      </div>
    );
  }


export default Signin;