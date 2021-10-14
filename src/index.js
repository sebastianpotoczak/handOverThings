import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import AppView from './component/appView';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import loginView from './component/login';
import Register from './component/register';
import Logout from './component/logout';
import View from './component/oddajRzeczy';

const ReactRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={AppView} />
          <Route exact path='/login' component={loginView} />
          <Route exact path='/rejestracja' component={Register} />
          <Route exact path='/wylogowano' component={Logout} />
          <Route exact path='/oddaj-rzeczy' component={View} />
        </Switch>     
    </Router>
  )
}



ReactDOM.render(
   <ReactRouter />,
  document.getElementById('root')
);


