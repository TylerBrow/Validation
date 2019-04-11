import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom'

import Form from './Form'
import Thankyou from './Thankyou'


class App extends Component {
render() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Form}/> 
        <Route exact path='/Thankyou' component={Thankyou} />
      </div>
    </Router>
  );
}
}

export default App;
