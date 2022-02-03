import React from 'react';

function BlogThumbnail({idx, title, brief, coverImage, openPost, slug}) {
  const descCharLimit = 69
  // Removes HTML tags from description
  description = description.slice(0, descCharLimit).split("")
  .filter((v, i, a) => !(v === "<" || v === ">" || a[i - 1] === "<" || a[i + 1] === ">"))
  .join("") + "..."

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
