import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Spellbook from './components/Spellbook';
import CodingConsole from './components/CodingConsole';
import GameWorld from './components/GameWorld';
import InstructionsPanel from './components/InstructionsPanel';
import NavigationBar from './components/NavigationBar';
import TitleScreen from './components/TitleScreen';
import { WizardProvider } from './components/WizardContext';

function App() {
  return (
    <WizardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TitleScreen />} />   // title screen is shown when user first visits the site
          <Route path="/home" element={
            <>
              <NavigationBar />
              <GameWorld />
              <CodingConsole />
              <InstructionsPanel />
            </>
          } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/spellbook" element={<Spellbook />} />
        </Routes>
      </Router>
    </WizardProvider>
  );
}

export default App;
