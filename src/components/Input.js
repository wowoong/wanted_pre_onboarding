import React, { useState } from 'react';
import "./Input.css";


const Input = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reveal, setReveal] = useState(false);

  function onChange(event) {
    const { target: { name, value } } = event;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }
  function onSubmit(event) {
    event.preventDefault();
  }
  const hidePassword = () => {
    setReveal(!reveal);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='des'>E-mail</div>
        <input name="email" type="email" placeholder='E-mail' value={email} onChange={onChange} required />
        <div className='des'>Password</div>
        <input name="password" type={reveal ? 'text' : 'password'} placeholder='Password' value={password} onChange={onChange} required />
        <button onClick={hidePassword}>{reveal? "hide" : "show"}</button>
      </form>
    </div>
  );
}

export default Input;