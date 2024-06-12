import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home';
import { LoginPage } from './pages/Login';
import { About } from './pages/About';
import { Page404 } from './pages/Page404';
import { Movies } from './pages/Movies';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { AuthProvider } from './hooks/useAuth';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<PublicRoute> <LoginPage/> </PublicRoute>} />
        <Route path='/about' element={<ProtectedRoute> <About /> </ProtectedRoute>} />
        <Route path='/movies' element={<ProtectedRoute> <Movies /> </ProtectedRoute>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </AuthProvider>
  )
}

export default App