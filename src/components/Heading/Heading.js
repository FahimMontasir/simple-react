import React from 'react';
import logo from './logo.svg'
import './Heading.css'

const Heading = () => {

  return (
    <div>
      <div className="heading p-3 d-flex justify-content-center">
        <img src={logo} alt="team logo" />
        <h1>Team Comilla</h1>
      </div>
    </div>
  );
};

export default Heading;