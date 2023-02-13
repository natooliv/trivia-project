import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import RankingButton from '../components/RankingButton';

class Feedbacks extends Component {
  render() {
    const MIN = 3;
    const { assertions, score } = this.props;
    return (
      <>
        <Header />
        <h1>Feedbacks</h1>
        <h1 data-testid="feedback-total-score">{ score }</h1>
        <h1 data-testid="feedback-total-question">{ assertions }</h1>
        <h1 data-testid="feedback-text">
          {
            assertions < MIN ? 'Could be better...' : 'Well Done!'
          }
        </h1>
        <RankingButton />
      </>
    );
  }
}

Feedbacks.propTypes = {
  assertions: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedbacks);
