import React, { Component } from 'react';

class BlogPost extends Component {

  state = {
    expandedViewIsActive: false
  }

  thumbnail = _=> (
    <div key={this.data.guid} className="Blogs-thumbnail">
      <img src={this.data.thumbnail} alt="" />
      <h4>{this.data.title}</h4>
      <p>{removeHTMLTags(this.data.description.slice(0, 49))}...</p>
    </div>
  )

  render() {
    return (
      <div>
        
      </div>
    );
  }
  
}

export default BlogPost;
