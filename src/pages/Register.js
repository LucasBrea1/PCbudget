import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/AuthSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { loading, error } = useSelector(state => state.auth);

  const handleRegister = () => {
    dispatch(registerUser({ name, password, email}));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de usuario"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={handleRegister} disabled={loading}>
        Registrarse
      </button>
      {error && <p>{error.message || error}</p>}
    </div>
  );
};
//{error && <p>{error}</p>}
export default Register;