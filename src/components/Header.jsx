import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
          data-testid="header-profile-picture"
          alt="imagem de perfil"
        />
        <p
          data-testid="header-player-name"
        >
          {name}
        </p>
        <p
          data-testid="header-score"
        >
          {score}
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;
const mapStateToProps = (state) => ({
  ...state.loginReducer,
  ...state.player,
});
export default connect(mapStateToProps)(Header);
