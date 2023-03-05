import React from 'react';
import './About.scss';
import { Container } from 'react-bootstrap';
import freelancelady from '../../Public/images/freelance-lady.jpg';

const About = () => {
  return (
    <Container className="aboutWrapper mt-5">
      <div className="content">
        <h4 className="subTitle">Enterprise Suite</h4>
        <h2 className="headline">
          This is how good companies find good company.
        </h2>
        <p>
          Access the top 1% of talent on hunt, and a full suite of hybrid
          workforce management tools. This is how innovation works now.
        </p>
        <ul>
          <li>Access expert talent to fill your skill gaps</li>
          <li>Control your workflow: hire, classify and pay your talent</li>
          <li>Partner with Upwork for end-to-end support</li>
        </ul>
      </div>
      <div
        className="img-div"
        style={{ backgroundImage: `url(${freelancelady})` }}
      ></div>
    </Container>
  );
};

export default About;
