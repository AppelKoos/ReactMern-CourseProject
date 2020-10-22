import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import Places from './places/pages/NewPlace'

function App() {
  return <Router>
    <Switch>
      <Route path="/" exact > <Users /> </Route>
      <Route path="/places/new" exact > <Places /> </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
}

export default App;
