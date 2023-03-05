import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', isActive);

    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);
  // const currentUser = null
  const currentUser = {
    id: 1,
    username: 'Anna',
    isSeller: true,
  };
  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <Container className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Hunt</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <Link className="link" to="/login">
            {' '}
            <span>Sign In</span>
          </Link>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
