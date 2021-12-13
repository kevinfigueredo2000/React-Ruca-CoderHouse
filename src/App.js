import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';

function App() {
  return (
    <React.Fragment className="App">
      <NavBarComponent/>
    </React.Fragment>
  );
}

export default App;
