import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  function checkInputs() {
    if(!email.includes('@')) {
      alert('Incorrect email')
    }
    // await requests.post(email, password)
    // history.push('/dashboard')
  }

  return (
    <div className="App">
      <h3>Email:</h3>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <h3>Phone:</h3>
      <input
        type="text"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />

      <hr />
      <button onClick={() => checkInputs()} >Submit</button>

    </div>
  );
}

export default App;
