import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello from a Class Component!",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>This is a basic class component.</p>
      </div>
    );
  }
}

export default ClassComponent;
