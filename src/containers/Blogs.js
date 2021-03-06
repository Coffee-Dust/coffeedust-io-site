import React, { Component } from 'react';
import '../assets/css/Blogs.css'
import BlogPost from '../components/BlogPost'
import BlogThumbnail from '../components/BlogThumbnail';
import { getAllBlogPostData } from '../data/blog-fetcher'

class BlogsContainer extends Component {

  state = {
    postData: [],
    openedPostData: false,
    prevScrollPos: false
  }

  openPost = (event)=> {
    const appContainer = document.querySelector(".App-content-container")
    const data = this.state.postData[event.currentTarget.id]
    const scrollPos = appContainer.scrollTop
    this.setState(s=> ({...s, openedPostData: data, prevScrollPos: scrollPos}), _=> appContainer.scrollTo({top: 0}))
  }

  closePost = event=> {
    const appContainer = document.querySelector(".App-content-container")
    appContainer.scrollTo({top: this.state.prevScrollPos})
    event.currentTarget.parentNode.classList.add("animate-close")
    setTimeout(_ => this.setState(s => ({ ...s, openedPostData: false })), 500)
  }

  componentDidMount() {
    getAllBlogPostData(postsOnPage=> this.setState(s=> ({...s, postData: postsOnPage})))
  }

  render() {
    return (
      <div className="Blogs-container">
        { this.state.openedPostData && <BlogPost {...this.state.openedPostData} closePost={this.closePost}/> }
        {this.state.postData.map((data, idx)=> <BlogThumbnail key={"BLOG_THUMBNAIL" + data.slug} idx={idx} {...data} openPost={this.openPost} />)}
      </div>
    );
  }
  
}

export default BlogsContainer;
