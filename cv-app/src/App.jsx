import { useState } from 'react'
import './App.css'

export default function App() {
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <>
      <p>
        <label>
          name: {' '}
          <input value={name} onChange = {handleNameChange} />
        </label>
      </p>
      <h1>{name}</h1>
    </>
  );
}