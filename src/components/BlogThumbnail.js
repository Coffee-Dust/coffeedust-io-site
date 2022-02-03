import React from 'react';

function BlogThumbnail({idx, title, brief, coverImage, openPost, slug}) {
  const descCharLimit = 69
  const briefDesc = brief.slice(0, descCharLimit) + '...'

  const redirectToBlogSite = e=> {
    window.location.href = `https://blog.dust.coffee/${slug}`
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
        <p>{briefDesc}</p>
      </div>
    </div>
  );
}

export default BlogThumbnail;
