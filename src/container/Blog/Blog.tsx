import React, { useMemo } from 'react'
import Layout from 'src/container/Layout/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StyledBlog } from './Style'

const Blog: React.FC = () => {
  const result = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allMdx {
        nodes {
          body
          frontmatter {
            id
            title
            image
          }
        }
      }
    }
  `)

  const renderBlog = useMemo(() => {
    const blogEl = result.allMdx.nodes.map((item: GatsbyTypes.Mdx) => {
      // console.log('teasdfads', item.frontmatter)
      return (
        <div key={`blog-${item.frontmatter?.id}`}>
          <Link to={`${item.frontmatter?.id}`}>
            <StyledBlog>
              <div className="image">
                <img src={item.frontmatter?.image} alt="dt_img" />
              </div>
              <div className="text-container">
                <div className="title">{item.frontmatter?.title}</div>
                <div className="description">
                  <MDXRenderer>{item.body}</MDXRenderer>
                </div>
              </div>
            </StyledBlog>
          </Link>
        </div>
      )
    })

    return blogEl
  }, [result])

  return <Layout pageTitle="Blog Page">{renderBlog}</Layout>
}
export default Blog
