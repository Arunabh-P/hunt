import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start  text-muted mt-5 ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 container social-section">
        <div className="me-5 d-none d-lg-block">
          <span className="txt">Get connected with us on social networks</span>
        </div>
        <div>
          <a href="" className="me-4 link-secondary">
            <FaFacebookF className="social-icons" />
          </a>
          <a href="" className="me-4 link-secondary">
            <FaTwitter className="social-icons" />
          </a>

          <a href="" className="me-4 link-secondary">
            <AiFillInstagram className="social-icons" />
          </a>
          <a href="" className="me-4 link-secondary">
            <BsLinkedin className="social-icons" />
          </a>
          <a href="" className="me-4 link-secondary">
            <BsGithub className="social-icons" />
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h2 className=" fw-bold mb-4 txt">
                Hunt<span className="span-text">.</span>
              </h2>
              <p className="txt">
                Find high-quality services at every price point.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="txt  mb-4">Services</h4>
              <p className="txt">
                <a href="#!" className="text-reset ">
                  Angular
                </a>
              </p>
              <p className="txt">
                <a href="#!" className="text-reset ">
                  React
                </a>
              </p>
              <p className="txt">
                <a href="#!" className="text-reset ">
                  Vue
                </a>
              </p>
              <p className="txt">
                <a href="#!" className="text-reset ">
                  Laravel
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="txt mb-4">Useful links</h4>
              <p className="txt">
                <a href="#!" className="text-reset ">
                  Pricing
                </a>
              </p>
              <p className="txt">
                <a href="#!" className="text-reset ">
                  Settings
                </a>
              </p>
              <p className="txt">
                <a href="#!" className="text-reset ">
                  Orders
                </a>
              </p>
              <p className="txt">
                <a href="#!" className="text-reset ">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h4 className="txt mb-4">Contact</h4>
              <p className="txt">arunabh1995@gmail.com</p>
              <p className="txt">+ 91 871 436 86 99</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center txt p-4">
        © 2021 Copyright{' '}
        <a className="text-reset " href="https://mdbootstrap.com/">
          : Hunt.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
