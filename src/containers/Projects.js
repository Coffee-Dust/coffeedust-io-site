import React, { Component } from 'react';
import Project from '../components/Project';
import '../assets/css/Projects.css'
import projectInfo from '../data/project_info'
import ProjectDetails from '../components/ProjectDetails';

class ProjectsContainer extends Component {

  state = {
    opened: false
  }

  componentDidMount() {
    if (this.props.match) {
      this.displayProjectFromSlug()
    }
  }

  displayProjectFromSlug = _=> {
    if (projectInfo.projects[this.props.match.params.slug]) {
      this.setState(s => ({ ...s, opened: this.props.match.params.slug}))
    }
  }

  toggleProjectDetails = (event)=> {
    const appContainer = document.querySelector(".App-content-container")

    if (this.state.opened) {
      this.setState(s => ({ ...s, opened: false }))
      window.history.pushState({projectDetailsJustClosed: true}, "", "/projects")

    } else {
      this.setState(s => ({ ...s, opened: event.target.parentNode.id}))
      
      window.history.pushState({openedFromLocalPage: true}, null, `projects/${event.target.parentNode.id}`)
      appContainer.scrollTo({top: 0})

    }
    event.target.parentNode.classList.toggle("opened")
  }

  render() {
    return (
      <div className="Projects-container">
        {
          (this.state.opened) ?
          <ProjectDetails {...projectInfo.projects[this.state.opened]} closeDetails={this.toggleProjectDetails} />
          :
          null
        }
        {Object.keys(projectInfo.projects).map((id, idx, a)=> <Project idx={idx} key={id} {...projectInfo.projects[id]} animationPos={a.length - idx} open={this.toggleProjectDetails} />).reverse()}
      </div>
    );
  }
}

export default ProjectsContainer;
