import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './pages/about';

function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
    </Switch>
  );
}

export default Routes;
