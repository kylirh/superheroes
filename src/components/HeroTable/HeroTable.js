import React, { Component } from 'react';
import HeroRow from '../HeroRow/HeroRow'
import './HeroTable.css'

class HeroTable extends Component {
  render() {
    const rows = this.props.heroes.map(hero => <HeroRow hero={hero} key={hero.id} onSelect={this.props.onSelect} />);
    const sortBy = this.props.onSort;

    return (
        <table>
          <thead>
            <tr>
              <td></td>
              <td className="sortable" onClick={() => sortBy("id")}>ID</td>
              <td className="sortable" onClick={() => sortBy("name")}>Name</td>
              <td className="sortable" onClick={() => sortBy("persona")}>Persona</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    );
  }
}

export default HeroTable;
