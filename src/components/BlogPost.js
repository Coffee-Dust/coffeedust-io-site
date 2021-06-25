import React, { Component } from 'react';

class BlogPost extends Component {

  state = {
    expandedViewIsActive: false
  }

  toggleExpandedView = event=> {
    if (event.currentTarget.classList.contains("Blogs-thumbnail")) {
      event.currentTarget.classList.toggle("expanded")
      event.currentTarget.parentNode.classList.toggle("column-view")
    }
  }

  removeHTMLTags = desc=> (
    desc.split("")
    .filter((v, i, a) => !(v === "<" || v === ">" || a[i - 1] === "<" || a[i + 1] === ">"))
    .join("")
  )


  render() {
    return (
    <div className="Blogs-thumbnail sun-box-shadow" 
    style={{ backgroundImage: `url(${this.props.thumbnail})` }}
    onClick={this.toggleExpandedView} >
      <h2>{this.props.title}</h2>
      <p>{this.removeHTMLTags(this.props.description.slice(0, 49))}...</p>

      <article dangerouslySetInnerHTML={{__html: this.props.content}} />
    </div>
    );
  }

}

export default BlogPost;
