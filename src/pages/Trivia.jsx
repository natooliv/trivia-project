import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Game from '../components/Game';
import Timer from '../components/Timer';

class Trivia extends Component {
  render() {
    const { history, timerBool } = this.props;
    return (
      <div>
        <Header />
        <Game history={ history } />
        { timerBool && <Timer /> }
      </div>
    );
  }
}

Trivia.propTypes = {
  history: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.player,
});
export default connect(mapStateToProps)(Trivia);
