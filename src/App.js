import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import {BrowserRoute, Router, Routes, Route, Navigate} from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div>
    <Router>
      <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
