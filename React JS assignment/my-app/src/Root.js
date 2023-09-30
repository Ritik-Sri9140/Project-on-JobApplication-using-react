import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';

const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/components/Login" component={Login} />
        <Route path="/components/Signup" component={Signup} />
        <Route path="/" component={App} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
