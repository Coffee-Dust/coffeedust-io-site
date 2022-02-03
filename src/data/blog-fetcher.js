
export async function gql(query, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  return data.json();
}

const QUERY_ALL_BLOGS = `
query GetUserArticles($page: Int!) {
    user(username: "coffeedust") {
        publication {
            posts(page: $page) {
                title
                brief
                coverImage
                slug
            }
        }
    }
}
`
export async function getAllBlogPostData() {
  let blogData = []
  let pageNum = 0
  do {
    const data = await gql(QUERY_ALL_BLOGS, {page: pageNum})
    blogData = [...blogData, ...data.data.user.publication.posts]
    pageNum++
  } while (pageNum < 5)
  return blogData
}