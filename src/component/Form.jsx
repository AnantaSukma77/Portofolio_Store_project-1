import React, { useState } from 'react';

export default function Form({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onClictBtn = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form>
      <h1>Login dulu</h1>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordChange} />
      </div>
      <button type="submit" onClick={onClictBtn}>
        Login
      </button>
    </form>
  );
}
