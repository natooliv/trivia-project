import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends Component {
  componentDidMount() {
    const { email } = this.props;
    console.log(email, md5(email).toString());
  }

  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <div>
        <p>{md5(email).toString()}</p>
        <div>{email}</div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;
const mapStateToProps = (state) => ({
  ...state.loginReducer,
});
export default connect(mapStateToProps)(Header);
