import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CardOptions extends Component {
  render() {
    const { option, testid, className, onClick, type } = this.props;
    return (
      <button
        data-testid={ testid }
        className={ className && type }
        onClick={ onClick }
      >
        { option }

      </button>
    );
  }
}

CardOptions.propTypes = {
  response: PropTypes.string,
}.isRequired;
