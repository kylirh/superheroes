import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heroes from './components/Heroes/Heroes';

class App extends Component {
  render() {
    const heroList = [
      { id: 1, name: "Konrad Sanro", persona: "Retwoner", active: false, selected: false, },
      { id: 2, name: "Rowan Bredal", persona: "Hyprona", active: false, selected: false, },
      { id: 3, name: "Ulani Kywann", persona: "The Archkay", active: false, selected: false, },
      { id: 4, name: "Broadrick Ikon", persona: "E-NINJA", active: false, selected: false, },
      { id: 5, name: "Stuard Jedrek", persona: "Blades", active: false, selected: false, },
      { id: 6, name: "Bruce Wayne", persona: "Batman", active: true, selected: false, },
      { id: 7, name: "Clark Kent", persona: "Superman", active: true, selected: false, },
      { id: 8, name: "Logan", persona: "Wolverine", active: true, selected: false, },
      { id: 9, name: "Peter Parker", persona: "Spider Man", active: true, selected: false, },
      { id: 10, name: "Tony Stark", persona: "Iron Man", active: true, selected: false, },
    ];

    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Super Awesome Superheroes!</h1>
        </header>
        <Heroes list={heroList} />
      </div>
    );
  }
}

export default App;
