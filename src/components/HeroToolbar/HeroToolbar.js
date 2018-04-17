import React, { Component } from 'react';

class HeroToolbar extends Component {
  render() {
    return (
      <div>
        <input id="show-inactive-checkbox" type="checkbox" checked={this.props.showInactive} onChange={() => this.props.onFilter()} />
        <label htmlFor="show-inactive-checkbox">Show Inactive Heroes</label>
        <button>Email Superheroes</button>
      </div>
    );
  }
}

export default HeroToolbar;
