import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Players from '../Players/Players';
import './Body.css'
import data from '../../Data/data.json'
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import Heading from '../Heading/Heading';


const Body = () => {
  const [players, setPlayers] = useState([]);
  //to collect data from json file
  useEffect(() => {
    setPlayers(data)
  }, []);

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // to handle button click event
  const handleSelectPlayer = player => {
    const newSelectedPlayerArray = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayerArray)
  }

  return (
    <div className="all-components">
      <Heading></Heading>

      <div className="row">
        <div className="col-4">
          <h3 className="text-center text-warning">Selected players({selectedPlayers.length})</h3>
          <SelectedPlayers selectedPlayers={selectedPlayers} ></SelectedPlayers>
        </div>
        <div className="col-8 d-flex flex-wrap players-section">
          {
            players.map(player => <Players key={player.id} handleSelectPlayer={handleSelectPlayer} player={player}></Players>)
          }
        </div>
      </div>

    </div>
  );
};

export default Body;