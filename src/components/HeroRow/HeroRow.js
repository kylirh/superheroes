import React, { Component } from 'react';
import './HeroRow.css'

class HeroRow extends Component {
  render() {
    const hero = this.props.hero;

    return (
      <tr className={hero.selected ? "hero-row row-selected" : "hero-row"}>
        <td className="cell-center"><input type="checkbox" checked={hero.selected} onChange={() => this.props.onSelect(hero)} /></td>
        <td className="cell-center">{hero.id}</td>
        <td>{hero.name}</td>
        <td>{hero.persona}</td>
        <td>{hero.active ? "Active" : "Inactive"}</td>
      </tr>
    );
  }
}

export default HeroRow;
