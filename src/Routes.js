import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import AnalyticsReporter from './data/analytics-reporter';
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
      <Route path="/resume">
        <ResumePage />
      </Route>
      <Route exact path="/projects/:slug" component={ProjectsPage} />
      <Route exact path="/projects">
        <ProjectsPage />
      </Route>
    </Switch>
  );
}

export default Routes;
