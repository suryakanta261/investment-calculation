import React, { useState } from 'react';

function LoginForm() {
  const [input, setInput] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showData, setShowData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted data:", input);
    setShowData(input); // Set the submitted data to show on the screen
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    // Optionally, reset the error message when user starts typing
    setError('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type='text' value={input.username} name='username' onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={input.password} name='password' onChange={handleChange} />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
      {showData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Username: {showData.username}</p>
          <p>Password: {showData.password}</p>
        </div>
      )}
    </>
  );
}

export default LoginForm;
