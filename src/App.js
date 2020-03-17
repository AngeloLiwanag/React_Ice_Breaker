import React from 'react';
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Angelo" lastName="Liwanag" age={21} hairColor="Black"/>
    </div>
  );
}

export default App;
