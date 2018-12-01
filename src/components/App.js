import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Index from '../pages/Index.jsx';
import Detail from '../pages/Detail.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/home/' component={Index} />
          <Route path='/detail/' component={Detail} />
          <Redirect exact from='/' to='/home/hot/' />
        </Switch>


      </div>
    );
  }
}

export default App;
