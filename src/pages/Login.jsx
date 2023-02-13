import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { requestAPIToken, saveUserData } from '../redux/actions/actions';

class Login extends Component {
  state = {
    name: '',
    email: '',
    buttonDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.buttonValidate);
  };

  buttonValidate = () => {
    const { email, name } = this.state;
    const emailValidate = validator.isEmail(email);
    const nameValidate = name.length !== 0;
    this.setState({ buttonDisabled: !(emailValidate && nameValidate) });
  };

  sendInfo = async (e) => {
    const { dispatch } = this.props;
    const { name, email } = this.state;
    e.preventDefault();
    await dispatch(saveUserData(name, email));
    await dispatch(requestAPIToken());
    console.log(localStorage.getItem('token'));
    const { history } = this.props;
    history.push('/trivia');
  };

  clickButton = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    const {
      name,
      email,
      buttonDisabled,
    } = this.state;
    return (
      <div>
        <form onSubmit={ this.sendInfo }>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              data-testid="input-gravatar-email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              value={ name }
              data-testid="input-player-name"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ buttonDisabled }
          >
            Play
          </button>
        </form>

        <button
          type="submit"
          data-testid="btn-settings"
          onClick={ () => this.clickButton() }
        >
          Configurações
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
