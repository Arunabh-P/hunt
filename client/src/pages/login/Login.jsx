/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.scss';
import loginImg from '../../Public/images/login.jpg';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <section className="loginSection">
      <Container className="loginPageWrapper">
        <div
          className="imgDiv"
          style={{ backgroundImage: `url(${loginImg})` }}
        ></div>
        <div className="formDiv">
          <form>
            <h1 className="loginHeadline text-center mb-3">Sign in</h1>
            <input
              name="username"
              className="mb-3"
              type="text"
              placeholder="Enter Username"
            />
            <input
              name="password"
              className="mb-3"
              type="password"
              placeholder="Enter Password"
            />
            <button type="submit">Login</button>
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
