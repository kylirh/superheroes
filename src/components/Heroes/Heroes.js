import React, { Component } from 'react';
import './Heroes.css';
import HeroTable from '../HeroTable/HeroTable';
import HeroToolbar from '../HeroToolbar/HeroToolbar';
import HeroMail from '../HeroMail/HeroMail';

class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: props.list.slice().sort((a, b) => a.name.localeCompare(b.name)),
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
        <div className="heroes">
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
            {this.state.showEmail ? <HeroMail recipients={selectedHeroes} onSend={() => this.setMailVisibility(false)} onCancel={() => this.setMailVisibility(false)} /> : null}
        </div>
    );
  }
}

export default Heroes;

