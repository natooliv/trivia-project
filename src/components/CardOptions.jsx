import PropTypes from 'prop-types';
import React, { Component } from 'react';

buttonFunctions = () => {
  const { answer, onClick } = this.props;
  answer();
  onClick
};

export default class CardOptions extends Component {
  render() {
    const { option, testid, className, timerEnd, type } = this.props;
    return (
      <button
        data-testid={ testid }
        className={ className && type }
        onClick={ this.buttonFunctions }
        disabled={ timerEnd }
      >
        { option }

      </button>
    );
  }
}

CardOptions.propTypes = {
  response: PropTypes.string,
  answer: PropTypes.func,
}.isRequired;
