import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import './App.css';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { Page404 } from './pages/Page404';
import { Movies } from './pages/Movies';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const [user, setUSer] = useLocalStorage('user');
  console.log("The user" + user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute canActivate={user} redirectPath='/login' />}>
          <Route path='/about' element={<About />} />
          <Route path='/movies' element={<Movies />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App