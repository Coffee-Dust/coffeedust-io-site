import React from 'react';

function BlogPost({title, content, thumbnail, closePost}) {
  return (
    <div className="Blogs-post blur-backdrop">
      <button className="back" onClick={closePost}>&lt;- back</button>
      <h2>{title}</h2>
      <img src={thumbnail} alt="" />
      <article dangerouslySetInnerHTML={{ __html: content }} />

    </div>
  );
}

export default BlogPost;
