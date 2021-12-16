import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { ProvideAuth } from '../src/hooks/useAuth';
import './App.css';

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>} 
          />
          <Route 
            path="/login" 
            element={
            <LoginPage />} 
          />
        </Routes>
      </div>
    </ProvideAuth>
  );
}

export default App;
