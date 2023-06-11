import React from 'react';
import './GameWorld.css';
import Wizard from './Wizard';

function GameWorld() {
  return (
    <div className="game-world-container text-center p-5">
      <h2>This is the Game World</h2>
      <Wizard />
    </div>
  );
}

export default GameWorld;
