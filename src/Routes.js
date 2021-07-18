import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ProjectsPage from './pages/projects'

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
          <Redirect to="/about" />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/blog">
        <BlogPage />
      </Route>
      <Route path="/projects">
        <ProjectsPage />
      </Route>
    </Switch>
  );
}

export default Routes;
