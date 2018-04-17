import React, { Component } from 'react';

class HeroRow extends Component {
  render() {
    const hero = this.props.hero;

    return (
      <tr>
        <td><input type="checkbox" checked={false} /></td>
        <td>{hero.id}</td>
        <td>{hero.name}</td>
        <td>{hero.persona}</td>
        <td>{hero.active ? "Active" : "Inactive"}</td>
      </tr>
    );
  }
}

export default HeroRow;