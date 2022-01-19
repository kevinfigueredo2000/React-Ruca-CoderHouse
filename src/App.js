import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <React.Fragment className="App">
      <NavBarComponent/>
      <ItemListContainer/>
    </React.Fragment>
  );
}

export default App;
