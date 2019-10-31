import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Firebase
import base from './base';

// Component
import Test from './component/Test';
import NotFound from './component/NotFound';

class App extends Component {
  state = {
    pseudo: 'John',
    key: 'value'
  };

  componentDidMount() {
    // We synchronize the this.state.key into Firebase /pseudo/exemple
    this.ref = base.syncState(`/${this.state.pseudo}/exemple`, {
      context: this,
      state: 'key'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Test} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
