/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.scss';
import loginImg from '../../Public/images/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import requestUrl from '../../utils/requestUrl';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await requestUrl.post('/auth/login', { username, password });
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <section className="loginSection">
      <Container className="loginPageWrapper">
        <div
          className="imgDiv"
          style={{ backgroundImage: `url(${loginImg})` }}
        ></div>
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <h1 className="loginHeadline text-center mb-3">Sign in</h1>
            <input
              name="username"
              className="mb-3"
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              name="password"
              className="mb-3"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            {error && error}
            <p className="loginText mt-3">
              Don't have an account?{' '}
              <Link to="/register" className="link">
                {' '}
                Click here
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Login;
