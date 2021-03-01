import React from 'react';
import './SelectedPlayers.css'

const SelectedPlayers = (props) => {
  const selectedPlayersArray = props.selectedPlayers;
  const totalBudget = selectedPlayersArray.reduce((total, player) => total + player.salary, 0);

  return (
    <div className="selected-list-bg text-center">
      <h4>Total budget: ${totalBudget}</h4>
      <ul>
        {
          selectedPlayersArray.map(player => <li key={player.id}>Name: {player.name} <p>Salary: ${player.salary}</p> </li>)
        }
      </ul>
    </div>
  );
};

export default SelectedPlayers;