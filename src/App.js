import { useState, useEffect } from 'react';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Register from './pages/Register';
import Login from './pages/Login';
import ManageProduct from './pages/ManageProduct';
import CreateProduct from './components/CreateProduct';
import Edit from './pages/Edit'
import { UserProvider } from './UserContext'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


import './App.css';
function App() {

  const [ user, setUser ] = useState({
    id: null,
    isAdmin: null
  });

  const unsetUser = () => {
    localStorage.clear();
    setUser({
      id: null,
      isAdmin: null
    })
  }

  useEffect(() => {
    // console.log(user);

    let token = localStorage.getItem('accessToken');
    // console.log(token);

    fetch('https://limitless-brushlands-90925.herokuapp.com/users/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json()).then(convertedData => {
      // console.log(convertedData)

      if (typeof convertedData._id !== "undefined") {
        setUser({
          id: convertedData._id,
          isAdmin: convertedData.isAdmin
        });
      } else {
        setUser({
          id: null,
          isAdmin: null
        })
      }
    });
  },[user])


  return (
    
      <UserProvider value={{user, setUser}} >
      <Router>
        <AppNavBar />
          <Routes>          
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/manage-product' element={<ManageProduct />} />
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/manage-product/update-product/:id' element={<Edit />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
      </Router>
      </UserProvider>
  );
};

export default App;
