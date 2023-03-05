import React from 'react';
import { Container } from 'react-bootstrap';
import google from '../../Public/images/company-logo/google.png';
import linkedIn from '../../Public/images/company-logo/linkedin.png';
import meta from '../../Public/images/company-logo/meta.png';
import netflix from '../../Public/images/company-logo/netflix.png';
import paypal from '../../Public/images/company-logo/paypal.png';
import printrest from '../../Public/images/company-logo/printrest.png';
import './Company.scss';
const Company = () => {
  return (
    <Container className="comapny-section mt-5">
      <h2 className="subHeading">
        We earned the <span className="span-text"> trust</span> of our{' '}
        <span className="span-text"> clients</span>
      </h2>
      <div className="logo-div">
        <a href="">
          <img src={google} alt="" />
        </a>
        <a href="">
          <img src={meta} alt="" />
        </a>
        <a href="">
          <img src={linkedIn} alt="" />
        </a>
        <a href="">
          <img src={netflix} alt="" />
        </a>
        <a href="">
          <img src={paypal} alt="" />
        </a>
        <a href="">
          <img src={printrest} alt="" />
        </a>
      </div>
    </Container>
  );
};

export default Company;
