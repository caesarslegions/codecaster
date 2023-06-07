import './GameWorld.css';
import { motion } from 'framer-motion';

function GameWorld() {
  return (
    <div className="container bg-primary text-center p-5">
      <h2>This is the Game World</h2>
      <motion.div 
        initial={{ x: 0 }} 
        animate={{ x: 200 }} 
        transition={{ duration: 2 }} 
        className="circle"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
    </div>
  );
}

export default GameWorld;
