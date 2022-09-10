import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './features/login/login-button';
import LogoutButton from './features/login/logout-button';
import Profile from './features/user/user-profile';

function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>
    </div>
  );
}

export default App;
