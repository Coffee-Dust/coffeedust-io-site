import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import AnalyticsReporter from './data/analytics-reporter';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ProjectsPage from './pages/projects'
import ResumePage from './pages/resume';

function Routes() {

  // <Analytics> onPageLoad event callback
  const windowLocation = useLocation();
  React.useEffect(_=> {
    // Checks for direct project visit, i.e. cd.io/projects/:slug
    if (window.location.pathname !== "/projects" && window.location.pathname.includes("/projects")) {
      const projectNameFromSlug = window.location.pathname.slice(10)
      AnalyticsReporter.reportEvent("pageLoad", {pageName: "/projects", directProjectLink: true, projectName: projectNameFromSlug})
      AnalyticsReporter.reportEvent("projectDetailsClick", {projectName: projectNameFromSlug})
    } else {
      AnalyticsReporter.reportEvent("pageLoad", {pageName: window.location.pathname})
    }
  }, [windowLocation]);

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
