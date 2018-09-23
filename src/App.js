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
    ]
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

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Zakaria", age: 32 },
        { name: "Sofia", age: 31 },
        { name: "Kassym", age: 3 },
        { name: "Malika", age: 1 },
        { name: event.target.value, age: 78 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inheret",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button style={style} onClick={() => this.switchNameHandler("INCONNU")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler("INCONNU Too")}
        >
          My Hobbies: Nada
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
        <Person
          name={this.state.persons[4].name}
          age={this.state.persons[4].age}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
