import React from 'react';
import './InstructionsPanel.css';

function InstructionsPanel() {
  return (
    <div className="scroll-container">
      <h2 className="challenge-title">Challenge 1: The Enchanted Forest</h2>
      <p className="challenge-description">
        In the enchanted forest, you will find trees of different heights. Your task is to write a function that takes an array of tree heights and returns the height of the tallest tree.
      </p>
    </div>
  );
}

export default InstructionsPanel;