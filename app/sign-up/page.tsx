"use client"
import { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {

  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-7 align-middle bg-gray-900 rounded">
        <h2 className="mb-5">Sign Up</h2>
        <input type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          className="bg-gray-700 text-white rounded outline-none w-full p-3 mb-4"></input>
        <input type="text"
          placeholder="Password"
          onChange={(event) => { setPassword(event.target.value) }}
          className="bg-gray-700 text-white rounded outline-none w-full p-3 mb-4"></input>
        <button onClick={handleClick}
          className='w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500'
        >Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
