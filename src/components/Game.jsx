import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../data/apiRequest';
import { clearState, increaseScore } from '../redux/actions/actions';
import CardOptions from './CardOptions';
import './game.css';

const half = 0.5;
const errorNumber = 3;
const startCounter = -1;
const defaultScore = 10;
class Game extends Component {
  state = {
    questions: [{
      question: '',
      incorrect_answers: ['', ''],
    }],
    counter: 0,
    result: false,
  };

  componentDidMount() {
    this.getQuestiosnFromData();
  }

  getQuestiosnFromData = async () => {
    const { dispatch, history } = this.props;
    try {
      const questions = await getQuestions();
      if (questions.response_code === errorNumber) throw new Error('Token Inválido');
      this.setState({ questions: questions.results });
    } catch (error) {
      dispatch(clearState());
      localStorage.clear();
      history.push('/');
    }
  };

  colorsQuestions = () => {
    this.setState({ result: true });
  };
  answerQuestion = ({ target }) => {
    const { questions, counter } = this.state;
    const { dispatch } = this.props;
    const cur = questions[counter];
    console.log(questions);
    const check = target.innerText === cur.correct_answer;
    const values = { hard: 3, medium: 2, easy: 1 };
    const points = defaultScore + (values[cur.difficulty]);
    if (check) dispatch(increaseScore(points));
    console.log(points);
  };

  render() {
    const {
      questions,
      counter,
      result,
    } = this.state;
    const {
      score,
      timeout,
    } = this.props;
    const options = [questions[counter].correct_answer,
      ...questions[counter].incorrect_answers,
    ].sort(() => half - Math.random());
    let answerIndex = startCounter;
    return (
      <div>
        <div>
          <p>
            {score}
          </p>
        </div>
        <p
          data-testid="question-category"
        >
          {questions[counter].category}
        </p>
        <p
          data-testid="question-text"
        >
          {questions[counter].question}
        </p>
        <div data-testid="answer-options">
          {options.map((option, index) => {
            if (option === questions[counter].incorrect_answers[answerIndex + 1]) {
              answerIndex += 1;
            }
            return (<CardOptions
              option={ option }
              key={ `option-${index}` }
              testid={ option === questions[counter].correct_answer ? (
                'correct-answer') : `wrong-answer-${answerIndex}` }

              className={ result }
              onClick={ (e) => this.colorsQuestions(e) }
              type={ option === questions[counter].correct_answer
                ? 'correct' : 'wrong' }
              answer={ this.answerQuestion }
              timerEnd={ timeout }
            />);
          })}
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.player,
});

export default connect(mapStateToProps)(Game);
