class BlogPost {
  constructor(data) {
    this.data = data
  }

  get thumbnailNode() {
    const removeHTMLTags = desc => (
      desc.split("")
        .filter((v, i, a) => !(v === "<" || v === ">" || a[i - 1] === "<" || a[i + 1] === ">"))
        .join("")
    )
    return (
      <div key={this.data.guid} className="Blogs-thumbnail">
        <img src={this.data.thumbnail} alt="" />
        <h4>{this.data.title}</h4>
        <p>{removeHTMLTags(this.data.description.slice(0, 49))}...</p>
      </div>
    )
  }
}
export default BlogPost;