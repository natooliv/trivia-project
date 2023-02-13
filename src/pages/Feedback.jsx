import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HomeButton from '../components/HomeButton';
import RankingButton from '../components/RankingButton';
import { clearStore } from '../redux/actions/actions';

class Feedback extends Component {
  page = () => {
    const { history, dispatch } = this.props;
    dispatch(clearStore());
    history.push('/');
  };

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
        <HomeButton />
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.page }
        >
          Play Again
        </button>
      </>
    );
  }
}

Feedback.propTypes = {
  dispatch: PropTypes.func,
  assertions: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
