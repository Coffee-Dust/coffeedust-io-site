import React from 'react';

function BlogPost({title, content, thumbnail}) {
  return (
    <div className="Blogs-post blur-backdrop">
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
      <article dangerouslySetInnerHTML={{ __html: content }} />

    </div>
  );
}

export default BlogPost;
