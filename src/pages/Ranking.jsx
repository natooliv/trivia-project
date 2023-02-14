import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';

class Ranking extends Component {
  state = {
    ranking: [],
  };

  componentDidMount() {
    const rankingList = JSON.parse(localStorage.getItem('rankingList'));
    const ranking = rankingList.sort((a, b) => (b.score - a.score));
    console.log(ranking);
    this.setState({ ranking });
  }

  render() {
    const { ranking } = this.state;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <HomeButton />
        {ranking.map(({ name, gravatar, score }, index) => (
          <div key={ name }>
            <img src={ gravatar } alt={ `imagem de ${name}` } />
            <p data-testid={ `player-name-${index}` }>{name}</p>
            <p data-testid={ `player-score-${index}` }>{score}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Ranking;
