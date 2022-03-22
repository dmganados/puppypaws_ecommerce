import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Register from './pages/Register';
import Login from './pages/Login';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div>
      <Router>
        <AppNavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
      </Router>
    </div>  
  );
};

export default App;
