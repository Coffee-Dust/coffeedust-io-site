import React from 'react';
import ProjectsContainer from '../containers/Projects';

function ProjectsPage(props) {
  return (
    <div className="Page-content">
      <h1>my projects</h1>
      <ProjectsContainer {...props}/>
    </div>
  );
}

export default ProjectsPage;
