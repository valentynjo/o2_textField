import React, { useState } from 'react';
import TextField from './components/TextField';

function App() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);

    if (val.length < 3) {
      setError('Minimálne 3 znaky');
      setSuccess('');
    } else {
      setError('');
      setSuccess('OK!');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>React TextField Example</h1>
      <TextField
        label="Meno"
        placeholder="Zadaj meno"
        value={name}
        onChange={handleNameChange}
        error={error}
        success={success}
      />

      <TextField
        label="Nepovinné pole (disabled)"
        placeholder="Toto pole je neaktívne"
        disabled
      />
    </div>
  );
}

export default App;
