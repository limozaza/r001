import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Zakaria", age: 32 },
      { name: "Sofia", age: 31 },
      { name: "Kassym", age: 3 },
      { name: "Malika", age: 1 },
      { name: "AAA", age: 32 }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: "Zakaria", age: 32 },
        { name: "Sofia", age: 31 },
        { name: "Kassym", age: 3 },
        { name: "Malika", age: 1 },
        { name: newName, age: 78 }
      ]
    });
  };

  deletePersonHandler = indexPerson => {
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({ persons });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inheret",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
