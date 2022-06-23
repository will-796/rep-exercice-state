import React from 'react';
import '../styles/App.css';
import pokemons from '../data/data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={ pokemons } />
    </div>
  );
}

export default App;
