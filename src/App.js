import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state = {
    persons: [
      {name: "Zakaria", age: 32},
      {name: "Sofia", age: 31},
      {name: "Kassym", age: 3},
      {name: "Malika", age: 1},
      {name: "AAA", age: 32},
    ]
  }

  switchNameHandler = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Nada</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age}/>
        
      </div>
    );
  }
}

export default App;
