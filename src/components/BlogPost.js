import React from 'react';

function BlogPost({title, brief, coverImage, slug, content, closePost}) {
  return (
    <div className="Blogs-post blur-backdrop">
      <button className="close" onClick={closePost}>x</button>
      <h2>{title}</h2>
      <img src={coverImage} alt="" />
      <article dangerouslySetInnerHTML={{ __html: (content) ? content : brief }} />

    </div>
  );
}

export default BlogPost;
