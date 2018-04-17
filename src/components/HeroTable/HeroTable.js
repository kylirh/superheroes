import React, { Component } from 'react';
import HeroRow from '../HeroRow/HeroRow'

class HeroTable extends Component {
  render() {
    const rows = this.props.heroes.map(hero => <HeroRow hero={hero} key={hero.id} />);

    return (
        <table>
          <thead>
            <tr>
              <td></td>
              <td>ID</td>
              <td>Name</td>
              <td>Persona</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    );
  }
}

export default HeroTable;
