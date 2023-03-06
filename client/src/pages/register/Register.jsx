import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../Public/images/register.jpg';
import requestUrl from '../../utils/requestUrl';
import upload from '../../utils/upload';

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    country: '',
    isSeller: false,
    desc: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await requestUrl.post('/auth/register', {
        ...user,
        img: url,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="regSection">
        <Container className="regPageWrapper">
          <div
            className="imgDiv"
            style={{ backgroundImage: `url(${registerImg})` }}
          ></div>
          <div className="formDiv">
            <form onSubmit={handleSubmit}>
              <h1 className="loginHeadline  mb-3">Register Now</h1>
              <div className="formRight">
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="mb-3"
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="email"
                  className="mb-3"
                  placeholder="Email Id"
                  onChange={handleChange}
                />
                <input
                  name="password"
                  className="mb-3"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <br />
                <label className="text-white">Profile Picture</label>
                <input
                  className="mb-3 text-white"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className="formLeft">
                <input
                  name="country"
                  className="mb-3"
                  type="text"
                  placeholder="Country"
                  onChange={handleChange}
                />
                <input
                  name="phone"
                  className="mb-3 "
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                <textarea
                  placeholder="A short description of yourself"
                  name="desc"
                  id=""
                  cols="30"
                  className="mb-3"
                  rows="3"
                  onChange={handleChange}
                ></textarea>

                <div className="toggle mb-3">
                  <label className="text-white">
                    Activate the seller account
                  </label>
                  <label className="switch">
                    <input type="checkbox" onChange={handleSeller} />
                    <span className="slider round"></span>
                  </label>
                </div>
                <button type="submit">Register</button>
                <p className="loginText mt-3">
                  Already have an account?{' '}
                  <Link to="/login" className="link">
                    {' '}
                    Click here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Register;
