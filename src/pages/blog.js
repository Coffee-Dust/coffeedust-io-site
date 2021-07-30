import React from 'react';
import BlogsContainer from '../containers/Blogs';

function BlogPage() {
  return (
    <div className="Page-content">
      <h1>my blogs</h1>
      <a id="mediumLinkButton" href="https://coffeedust.medium.com" target="_blank" rel="noreferrer"><button className="styled-button-light">Blogs hosted via <img src={require("../assets/mediumLogo.png").default} alt="See blogs on Medium.com" /></button></a>
      <BlogsContainer />
    </div>
  );
}

export default BlogPage;
