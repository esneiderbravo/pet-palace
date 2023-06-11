import React, { useState } from 'react';
import { loginWithCredentials } from '../services/AuthenticationService';
import LoginComponent from '../components/LoginComponent';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginWithCredentials(email, password);
  };

  return (
    <LoginComponent
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
}

export default Login;
