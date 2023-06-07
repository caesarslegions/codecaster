import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile'; // make sure the paths to these components are correct
import Spellbook from './components/Spellbook';
import CodingConsole from './components/CodingConsole';
import GameWorld from './components/GameWorld';
import InstructionsPanel from './components/InstructionsPanel';
import NavigationBar from './components/NavigationBar';
import TitleScreen from './components/TitleScreen';  // import the new TitleScreen component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitleScreen />} />   // title screen is shown when user first visits the site
        <Route path="/home" element={
          <>
            <NavigationBar />  // move NavigationBar inside /home route
            <GameWorld />
            <CodingConsole />
            <InstructionsPanel />
          </>
        }/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/spellbook" element={<Spellbook />} />
      </Routes>
    </Router>
  );
}

export default App;
