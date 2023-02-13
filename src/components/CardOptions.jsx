import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CardOptions extends Component {
  buttonFunctions = () => {
    const { answer, onClick } = this.props;
    answer();
    onClick();
  };

  render() {
    const { option, testid, className, timerEnd, type, func } = this.props;
    return (
      <button
        data-testid={ testid }
        className={ className ? type : undefined }
        onClick={ func }
        disabled={ timerEnd }
      >
        { option }

      </button>
    );
  }
}

CardOptions.propTypes = {
  response: PropTypes.string,
}.isRequired;
