import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ProjectsPage from './pages/projects'
import ResumePage from './pages/resume';

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
      <Route exact path="/projects/:slug" component={ProjectsPage} />
      <Route exact path="/projects">
        <ProjectsPage />
      </Route>
    </Switch>
  );
}

export default Routes;
