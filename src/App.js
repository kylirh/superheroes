import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroTable from './components/HeroTable/HeroTable';
import HeroToolbar from './components/HeroToolbar/HeroToolbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [
        { id: 1, name: "Konrad Sanro", persona: "Retwoner", active: false },
        { id: 2, name: "Rowan Bredal", persona: "Hyprona", active: false },
        { id: 3, name: "Ulani Kywann", persona: "The Archkay", active: false },
        { id: 4, name: "Broadrick Ikon", persona: "E-NINJA", active: false },
        { id: 5, name: "Stuard Jedrek", persona: "Blades", active: false },
        { id: 6, name: "Bruce Wayne", persona: "Batman", active: true },
        { id: 7, name: "Clark Kent", persona: "Superman", active: true },
        { id: 8, name: "Logan", persona: "Wolverine", active: true },
        { id: 9, name: "Peter Parker", persona: "Spider Man", active: true },
        { id: 10, name: "Tony Stark", persona: "Iron Man", active: true },
      ].sort((a, b) => a.name.localeCompare(b.name)),
      showInactive: true,
    };
  }

  handleSort(key) {
    const heroesCopy = this.state.heroes.slice();
    heroesCopy.sort(this.compareBy(key));
    this.setState({heroes: heroesCopy});
  }

  compareBy(key) {
    return (a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  handleToggleActive() {
    this.setState({
      showInactive: !this.state.showInactive
    });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Super Awesome Superheroes!</h1>
        </header>
        <HeroToolbar
          onToggleActive={() => this.handleToggleActive()}
          showInactive={this.state.showInactive}
        />
        <HeroTable
          heroes={this.state.heroes}
          onSort={(key) => this.handleSort(key)}
          showInactive={this.state.showInactive}
        />
      </div>
    );
  }
}

export default App;
