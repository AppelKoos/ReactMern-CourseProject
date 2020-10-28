import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users';
import Places from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'

function App() {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact > <Users /> </Route>
        <Route path="/:userId/places"> <UserPlaces /> </Route>
        <Route path="/places/new" exact > <Places /> </Route>
        <Redirect to="/" />
      </Switch>
    </main>

  </Router>
}

export default App;
