import React from 'react';

function BlogThumbnail({idx, title, brief, coverImage, openPost, slug}) {
  const descCharLimit = 69
  const briefDesc = brief.slice(0, descCharLimit) + '...'

  const redirectToMedium = e=> {
    window.location.href = link
  }

  return (
    <div 
    id={idx}
    className="Blogs-thumbnail"
    style={{ backgroundImage: `url(${thumbnail})`, "--animation-order": `${idx + 1}` }}
    onClick={redirectToMedium}
    >
      <div className="info-wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlogThumbnail;
