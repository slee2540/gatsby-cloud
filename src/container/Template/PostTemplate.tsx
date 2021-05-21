import React from 'react'
import { Layout } from 'src/container/Layout'
// import { useStaticQuery, graphql } from 'gatsby'

const PostTemplate: React.FC = React.memo((props) => {
  // const { data, error } = useStaticQuery<GatsbyTypes.Query>(graphql`
  //   {
  //     allMdx(sort: { fields: frontmatter___id, order: DESC }) {
  //       nodes {
  //         frontmatter {
  //           id
  //           path
  //           title
  //         }
  //       }
  //     }
  //   }
  // `)

  console.log('data', props)
  return (
    <Layout pageTitle="Blog">
      <h1>블로그 상세화면</h1>
      <code>
        <pre>{JSON.stringify(props, null, 4)}</pre>
      </code>
    </Layout>
  )
})

PostTemplate.displayName = 'PostTemplate'

export default PostTemplate
