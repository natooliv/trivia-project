import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timeoutAction } from '../redux/actions/actions';

class Timer extends Component {
  state = {
    seconds: 30,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(timeoutAction(this.state));
    const oneSec = 1000;
    setTimeout(() => {
      this.setState((state) => ({
        seconds: state.seconds - 1,
      }));
    }, oneSec);
  }

  componentDidUpdate(prevProps, prevState) {
    const { dispatch } = this.props;
    const oneSec = 1000;
    if (prevState.seconds >= 0) {
      setTimeout(() => {
        this.setState((state) => ({
          seconds: state.seconds - 1,
          isTimeout: state.seconds - 1 <= 0,
        }));
      }, oneSec);
      dispatch(timeoutAction(this.state));
    }
  }

  componentWillUnmount() {
    this.setState({ seconds: 30 });
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        <span>
          { seconds < 0 ? 0 : seconds }
        </span>
      </div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Timer);
