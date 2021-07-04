import React from 'react';

function BlogThumbnail({idx, title, description, thumbnail, openPost}) {
  const descCharLimit = 69
  // Removes HTML tags from description
  description = description.slice(0, descCharLimit).split("")
  .filter((v, i, a) => !(v === "<" || v === ">" || a[i - 1] === "<" || a[i + 1] === ">"))
  .join("") + "..."

  return (
    <div 
    id={idx}
    className="Blogs-thumbnail"
    style={{ backgroundImage: `url(${thumbnail})` }}
    onClick={openPost}
    >
      <div className="info-wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlogThumbnail;
