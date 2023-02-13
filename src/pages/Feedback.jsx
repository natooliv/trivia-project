import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { clearStore } from '../redux/actions/actions';

class Feedback extends Component {
  page = () => {
    const { history, dispatch } = this.props;
    dispatch(clearStore());
    history.push('/');
  };

  render() {
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">Feedback</p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.page }
        >
          Play Again
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;


export default connect()(Feedback);
