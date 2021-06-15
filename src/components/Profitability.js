/* eslint-disable */
import React, { Component } from 'react';

export default class Profitability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  addVote = () => {
    const newCount = this.state.votes + 1;
    this.setState({
      votes: newCount,
    });
  };

  render() {
    return (
      <button type="submit" onClick={this.addVote}>
        Votes:
        {this.state.votes}
      </button>
    );
  }
}
