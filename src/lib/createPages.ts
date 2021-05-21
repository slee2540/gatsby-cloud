import { CreatePagesArgs } from 'gatsby'
import path from 'path'

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions

  const { data, errors } = await graphql<GatsbyTypes.Query>(`
    {
      allMdx {
        nodes {
          frontmatter {
            id
            title
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  data?.allMdx.nodes.forEach((item: GatsbyTypes.Mdx) => {
    // console.log('대이터를 확인해보자:::', item.frontmatter)
    createPage({
      path: '/blog/' + item.frontmatter?.id,
      context: {
        html: item.html,
        title: item.frontmatter?.title,
      },
      component: path.resolve(__dirname, '../container/Template/PostTemplate.tsx'),
    })
  })
}
