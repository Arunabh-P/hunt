import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.scss';

const Slider = ({ card }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="sliderCard ">
        <img src={card.img} alt="" />
        <span className="description">{card.desc}</span>
        <span className="headline">{card.title}</span>
      </div>
    </Link>
  );
};

export default Slider;
