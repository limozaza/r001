import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <Person name="Zakaria" age="32">My Hobbies: Nada</Person>
        <Person name="Sofia" age="31"/>
        <Person name="Kassym" age="3"/>
        <Person name="Malika" age="1"/>
      </div>
    );
  }
}

export default App;
