import React, { Component } from 'react';

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
      <div>
        <h2>Email</h2>
        <h3>To: {prettyRecipients}</h3>
        <h4>Subject: <input type="text" placeholder="I'm Your Biggest Fan" value={this.state.subject} onChange={(e) => this.handleSubjectChange(e)} /></h4>
        <textarea placeholder="My Dearest Superheroes..." value={this.state.message} onChange={(e) => this.handleMessageChange(e)}></textarea>
        <button onClick={() => this.send(prettyRecipients, this.state.subject, this.state.message)}>Send</button>
        <button onClick={this.props.onCancel}>Cancel</button>
      </div>
    );
  }
}

export default HeroMail;
