import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}
