import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';

class Ranking extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <HomeButton />
      </div>
    );
  }
}

export default Ranking;
