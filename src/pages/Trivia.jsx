import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Game from '../components/Game';
import Timer from '../components/Timer';

export default class Trivia extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Game history={ history } />
        <Timer />
      </div>
    );
  }
}

Trivia.propTypes = {
  history: PropTypes.func,
}.isRequired;
