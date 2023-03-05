import React from 'react';
import { cards, projects } from '../../data';
import Featured from '../../components/featured/Featured';
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import { Container } from 'react-bootstrap';
import About from '../../components/about/About';
import Company from '../../components/company/Company';
import Slider2 from '../../components/Slider/Slider2';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Container className="homeSlider mt-5">
        {/* <h2 className="subHeading">Check out our most popular services</h2> */}
        <h2 className="subHeading">
          Find out what we do <span className="span-text">best</span>
        </h2>

        <div className="cardReel scrollbar-hidden">
          {cards.map((card) => (
            <Slider key={card.id} card={card} />
          ))}
        </div>
      </Container>
      <About />
      <Company />
      <Container className="homeSlider mt-5">
        <h2 className="subHeading">
          A whole world of freelance talent at{' '}
          <span className="span-text"> your fingertips</span>
        </h2>

        <div className="cardReel scrollbar-hidden">
          {projects.map((card) => (
            <Slider2 key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
