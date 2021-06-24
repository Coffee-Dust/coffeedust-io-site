import React, { Component } from 'react';
import BlogPost from '../components/BlogPost'

class BlogsContainer extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@coffeedust").then(r=>r.json()).then(data=> {
      const posts = data.items.map((blogData, idx)=> <BlogPost {...blogData} key={idx} />)
      this.setState(s=> ({...s, posts: posts}))
    })
  }

  render() {
    return (
      <div>
        {this.state.posts}
      </div>
    );
  }
  
}

export default BlogsContainer;
