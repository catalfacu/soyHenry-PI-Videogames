import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Form from './components/form/Form';
import Detail from './components/detail/Detail';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

const location = useLocation();

  return (
    <div className="App">
      {
        location.pathname !== "/" && <NavBar/>
      }
      <Routes>
        <Route path="/" element= { <LandingPage /> } />
        <Route path="/home" element= { <Home/> } />
        <Route path="/form" element= { <Form/> } />
        <Route path="/detail/:id" element= { <Detail/> } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
