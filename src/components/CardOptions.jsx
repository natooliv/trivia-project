import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CardOptions extends Component {
  render() {
    const { option, testid, answer } = this.props;
    return (
      <button
        data-testid={ testid }
        onClick={ answer }
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
