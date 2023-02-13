import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../data/apiRequest';
import {
  clearState,
  createOptions,
  increaseScore,
  refreshTimer,
  timeoutAction,
} from '../redux/actions/actions';
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
    btnNext: false,
  };

  componentDidMount() {
    this.getQuestiosnFromData();
  }

  NextQuestion = (questions) => {
    const { counter } = this.state;
    const { dispatch } = this.props;
    const options = [questions[counter].correct_answer,
      ...questions[counter].incorrect_answers,
    ].sort(() => half - Math.random());
    dispatch(createOptions(options));
  };

  getQuestiosnFromData = async () => {
    const { dispatch, history } = this.props;
    try {
      const questions = await getQuestions();
      this.NextQuestion(questions.results);
      if (questions.response_code === errorNumber) throw new Error('Token Inválido');
      this.setState({ questions: questions.results });
    } catch (error) {
      dispatch(clearState());
      localStorage.clear();
      history.push('/');
    }
  };

  questionFromButtonNext = async () => {
    const { counter, questions } = this.state;
    const { dispatch, history } = this.props;
    if (questions[counter + 1]) {
      this.setState({
        counter: counter + 1,
        result: false,
        btnNext: false,
      }, () => this.NextQuestion(questions));
      await dispatch(timeoutAction(this.state));
      await dispatch(refreshTimer(false));
      await dispatch(refreshTimer(true));
    } else {
      history.push('/feedback');
    }
  };

  colorsQuestions = () => {
    this.setState(
      {
        result: true,
        btnNext: true,
      },
    );
  };

  answerQuestion = async ({ target }) => {
    const { questions, counter } = this.state;
    const { dispatch, timer } = this.props;
    const cur = questions[counter];
    const check = target.innerText === cur.correct_answer;
    const values = { hard: 3, medium: 2, easy: 1 };
    const points = defaultScore + (values[cur.difficulty] * timer);
    await dispatch(refreshTimer(false));
    await dispatch(timeoutAction({ isTimeout: true, seconds: 0 }));
    if (check) dispatch(increaseScore(points));
    console.log(points);
  };

  buttonFunctions = (e) => {
    this.answerQuestion(e);
    this.colorsQuestions(e);
    console.log(e);
  };

  render() {
    const {
      questions,
      counter,
      result,
      btnNext,
    } = this.state;
    // console.log(questions);
    const {
      timeout,
      options,
    } = this.props;
    let answerIndex = startCounter;
    return (
      <div>
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
            // console.log(option, questions[counter].correct_answer);
            return (<CardOptions
              option={ option }
              key={ `option-${index}` }
              testid={ option === questions[counter].correct_answer ? (
                'correct-answer') : `wrong-answer-${answerIndex}` }
              className={ result }
              func={ this.buttonFunctions }
              type={ option === questions[counter].correct_answer
                ? 'correct' : 'wrong' }
              timerEnd={ timeout }
            />);
          })}
        </div>
        {btnNext && (
          <button
            data-testid="btn-next"
            onClick={ this.questionFromButtonNext }
          >
            Next
          </button>
        )}
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
  ...state.loginReducer,
});

export default connect(mapStateToProps)(Game);
