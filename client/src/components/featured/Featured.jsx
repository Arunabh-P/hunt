import React from 'react';
import './Featured.scss';
import { BsSearch } from 'react-icons/bs';

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <h1>Your business needs the right freelancers</h1>
        <div className="search">
          <div className="searchInput">
            <BsSearch className="searchIcon" />
            <input type="text" placeholder='Try "build a web app"' />
          </div>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
