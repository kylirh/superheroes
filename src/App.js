import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroTable from './components/HeroTable/HeroTable';
import HeroToolbar from './components/HeroToolbar/HeroToolbar';
import HeroMail from './components/HeroMail/HeroMail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [
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
      ].sort((a, b) => a.name.localeCompare(b.name)),
      showInactive: true,
      showEmail: false,
    };
  }

  handleSelect(hero) {
    const index = this.state.heroes.findIndex(element => element === hero);
    const heroesCopy = this.state.heroes.slice();
    heroesCopy[index].selected = !heroesCopy[index].selected;
    this.setState({heroes: heroesCopy});
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

  handleFilter() {
    this.setState({
      showInactive: !this.state.showInactive
    });
  }

  setMailVisibility(visible) {
    this.setState({
      showEmail: visible
    });
  }

  render() {
    const filteredHeroes = this.state.heroes.filter(hero => hero.active || hero.active === !this.state.showInactive);
    const selectedHeroes = filteredHeroes.filter(hero => hero.selected);

    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Super Awesome Superheroes!</h1>
        </header>
        <div className="content">
          <HeroTable
            heroes={filteredHeroes}
            onSort={(key) => this.handleSort(key)}
            onSelect={(hero) => this.handleSelect(hero)}
          />
          <HeroToolbar
            onFilter={() => this.handleFilter()}
            showInactive={this.state.showInactive}
            onShowEmail={() => this.setMailVisibility(true)}
          />
        </div>
        {this.state.showEmail ? <HeroMail recipients={selectedHeroes} onSend={() => this.setMailVisibility(false)} onCancel={() => this.setMailVisibility(false)} /> : null}
      </div>
    );
  }
}

export default App;
