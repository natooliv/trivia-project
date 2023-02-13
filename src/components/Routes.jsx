import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Settings from './Settings';
import Trivia from '../pages/Trivia';
import Login from '../pages/Login';
import Feedback from '../pages/Feedback';
import Ranking from '../pages/Ranking';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/trivia" render={ (props) => <Trivia { ...props } /> } />
        <Route exact path="/feedback" render={ (props) => <Feedback { ...props } /> } />
        <Route exact path="/ranking" render={ (props) => <Ranking { ...props } /> } />
      </Switch>
    );
  }
}
