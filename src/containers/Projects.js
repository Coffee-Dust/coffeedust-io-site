import React, { Component } from 'react';
import Project from '../components/Project';
import '../assets/css/Projects.css'
import projectInfo from '../data/project_info.json'
import ProjectDetails from '../components/ProjectDetails';

class ProjectsContainer extends Component {

  state = {
    opened: false
  }

  toggleProjectDetails = (event)=> {
    if (this.state.opened) {
      this.setState(s => ({ ...s, opened: false }))
    } else {
      this.setState(s => ({ ...s, opened: event.target.parentNode.id}))
    }
    event.target.parentNode.classList.toggle("opened")
  }

  render() {
    return (
      <div className="Projects-container">
        {
          (this.state.opened) ?
          <ProjectDetails {...projectInfo.projects[this.state.opened]} />
          :
          null
        }
        {projectInfo.projects.map((data, idx, a)=> <Project idx={idx} key={data.id} {...data} animationPos={a.length - idx} open={this.toggleProjectDetails} />).reverse()}
      </div>
    );
  }
}

export default ProjectsContainer;
