import React, { Component } from 'react';

class BlogPost extends Component {

  state = {
    expandedViewIsActive: false
  }

  toggleExpandedView = _=> {
    this.setState(prev=> ({expandedViewIsActive: !prev.expandedViewIsActive}))
  }

  removeHTMLTags = desc=> (
    desc.split("")
    .filter((v, i, a) => !(v === "<" || v === ">" || a[i - 1] === "<" || a[i + 1] === ">"))
    .join("")
  )

  thumbnailView = _=> (
    <div key={this.props.guid} className="Blogs-thumbnail" 
    onClick={this.toggleExpandedView} >
      <img src={this.props.thumbnail} alt="" />
      <h4>{this.props.title}</h4>
      <p>{this.removeHTMLTags(this.props.description.slice(0, 49))}...</p>
      {(this.state.expandedViewIsActive) ? this.expandedView() : null }
    </div>
  )

  expandedView = _=> (
    <div className="Blogs-post-expanded">
      <header style={{backgroundImage: this.props.thumbnail}}>
        <h4>{this.props.title}</h4>
      </header>

      <article dangerouslySetInnerHTML={{__html: this.props.content}} />
    </div>
  )

  render() {
    return this.thumbnailView()
  }

}

export default BlogPost;
