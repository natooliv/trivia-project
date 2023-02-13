import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends Component {
  render() {
    return (
      <Link to="/">
        <button data-testid="btn-go-home">Home</button>
      </Link>
    );
  }
}

export default HomeButton;
