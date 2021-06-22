import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';

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
