import React, { Component } from 'react';
import validator from 'validator';

export default class Login extends Component {
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

  sendInfo = (e) => {
    e.preventDefault();
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
      </div>
    );
  }
}
