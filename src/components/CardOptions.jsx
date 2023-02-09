import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CardOptions extends Component {
  render() {
    const { option, testid } = this.props;
    return (
      <button data-testid={ testid }>
        { option }
      </button>
    );
  }
}

CardOptions.propTypes = {
  response: PropTypes.string,
}.isRequired;
