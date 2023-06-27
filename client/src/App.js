import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Form from './components/form/Form';

function App() {



//*ROUTING
const navigate = useNavigate();
function goHome() {
  navigate("/home");
};

const location = useLocation();

  return (
    <div className="App">
      {
        location.pathname !== "/" && <NavBar/>
      }
      <Routes>
        <Route path="/" element= { <LandingPage button={goHome}/> } />
        <Route path="/home" element= { <Home/> } />
        <Route path="/form" element= { <Form/> } />
      </Routes>
    </div>
  );
}

export default App;
