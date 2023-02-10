import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../data/apiRequest';
import { clearState } from '../redux/actions/actions';
import CardOptions from './CardOptions';
import './game.css';

const half = 0.5;
const errorNumber = 3;
const startCounter = -1;
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
    // if (target.className === 'correct') {
    //   target.border = '3px solid rgb(6, 240, 15)';
    // }
    // if (target.className === 'wrong') {
    //   target.border = '3px solid red';
    // }
  };

  render() {
    const {
      questions,
      counter,
      result,
    } = this.state;
    const options = [questions[counter].correct_answer,
      ...questions[counter].incorrect_answers,
    ].sort(() => half - Math.random());
    console.log([options]);
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
            console.log(option, questions[counter].incorrect_answers);
            return (<CardOptions
              option={ option }
              key={ `option-${index}` }
              testid={ option === questions[counter].correct_answer ? (
                'correct-answer') : `wrong-answer-${answerIndex}` }
              className={ result }
              onClick={ (e) => this.colorsQuestions(e) }
              type={ option === questions[counter].correct_answer
                ? 'correct' : 'wrong' }
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

export default connect()(Game);
