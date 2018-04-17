import React, { Component } from 'react';
import './HeroMail.css'

class HeroMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: "",
      message: ""
    }
  }

  send(recipients, subject, message) {
    alert(`Recipients: ${recipients}\nSubject: ${subject}\nMessage: ${message}`);
    this.props.onSend();
  }

  handleSubjectChange(e) {
    this.setState({subject: e.target.value});
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }

  render() {
    const prettyRecipients = this.props.recipients.map(user => user.name).join(", ");

    return (
      <div className="overlay">
        <div className="hero-mail">
          <div className="mail-header">Email</div>
          <div className="mail-recipients"><span className="mail-label">To</span>{prettyRecipients}</div>
          <div className="mail-subject"><span className="mail-label">Subject</span><input className="mail-input" type="text" placeholder="I'm Your Biggest Fan" value={this.state.subject} onChange={(e) => this.handleSubjectChange(e)} /></div>
          <textarea className="mail-message" placeholder="My Dearest Superheroes..." value={this.state.message} onChange={(e) => this.handleMessageChange(e)}></textarea>
          <div className="mail-buttons">
            <button onClick={this.props.onCancel}>Cancel</button>
            <button onClick={() => this.send(prettyRecipients, this.state.subject, this.state.message)}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroMail;
