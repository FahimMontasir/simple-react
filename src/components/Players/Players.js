import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Players.css'

const Players = (props) => {
  //destructuring object
  const { name, img, salary } = props.player;

  return (
    <div className="card text-center shadow-lg m-3 rounded" style={{ width: "15rem" }}>
      <img src={img} className="card-img-top" alt="player profile" />
      <div className="card-body">
        <h5 className="card-title text-warning">{name}</h5>
        <p className="card-text text-muted">Salary ${salary}</p>
        <button onClick={() => props.handleSelectPlayer(props.player)} className="btn btn-dark"><FontAwesomeIcon icon={faPlusCircle} /> select</button>
      </div>
    </div>
  );
};

export default Players;