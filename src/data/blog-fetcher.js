
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
