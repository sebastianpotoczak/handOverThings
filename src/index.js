import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import AppView from './component/appView';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import loginView from './component/login';
import Register from './component/register';



const ReactRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={AppView} />
          <Route exact path='/login' component={loginView} />
          <Route exact path='/rejestracja' component={Register} />
        </Switch>     
    </Router>
  )
}



ReactDOM.render(
   <ReactRouter />,
  document.getElementById('root')
);


