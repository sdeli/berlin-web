import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAction, registerUserAction } from '../../redux/AuthActions';
import { AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    form: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    title: {
      marginBottom: '20px',
      fontSize: '24px',
      color: '#333',
    },
  };
  const navigate = useNavigate(); // Initialize navigate function

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('password')
      console.log({ username, password })
      await dispatch(
        registerUserAction({ username, password }, navigate)
      );
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1 style={styles.title}>Register</h1>
        <form onSubmit={handleRegister}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <br />
          <button type="submit" style={styles.button} onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
