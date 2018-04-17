import React, { Component } from 'react';
import './HeroToolbar.css'

class HeroToolbar extends Component {
  render() {
    return (
      <div className="hero-toolbar">
        <input id="show-inactive-checkbox" type="checkbox" checked={this.props.showInactive} onChange={() => this.props.onFilter()} />
        <label htmlFor="show-inactive-checkbox">Show Inactive Heroes</label>
        <button className="email-button" onClick={() => this.props.onShowEmail()}>Email Superheroes</button>
      </div>
    );
  }
}

export default HeroToolbar;
