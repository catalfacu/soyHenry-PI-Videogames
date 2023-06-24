import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import Cards from './components/cards/Cards';

function App() {

const navigate = useNavigate();
function goHome() {
  navigate("/home");
};

  return (
    <div className="App">
      <Routes>
        <Route path="/" element= { <LandingPage button={goHome}/> } />
        <Route path="/home" element= { <Cards/> } />
      </Routes>
    </div>
  );
}

export default App;
