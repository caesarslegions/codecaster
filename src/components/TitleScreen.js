import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TitleScreen.css';

function TitleScreen() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="title-screen-container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <h1 className="title">CodeCaster</h1>
      <h2 className="subtitle">Master the spells of code in a magical world</h2>
      
      <div className="wizard-sprite" />
      
      <motion.button 
        className="start-game-button" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/home')}
      >
        Start Game
      </motion.button>
    </motion.div>
  );
}

export default TitleScreen;
