import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import CodingConsole from './components/CodingConsole';
import GameWorld from './components/GameWorld';
import InstructionsPanel from './components/InstructionsPanel';
import NavigationBar from './components/NavigationBar';
import TitleScreen from './components/TitleScreen';
import { WizardProvider } from './components/WizardContext';
import './App.css';

function App() {
  return (
    <WizardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/home" element={
            <>
              <NavigationBar />
              <div className="app-container">
                <GameWorld />
                <CodingConsole />
                <InstructionsPanel />
              </div>
            </>
          } />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </WizardProvider>
  );
}

export default App;
