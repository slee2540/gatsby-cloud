import * as React from 'react'
import GlobalStyles from 'src/style/global'
import { StyledLayout } from './Style'
import { Link } from 'gatsby'

type layoutProps = {
  pageTitle: string
  children: React.ReactNode
}

const Layout: React.FC<layoutProps> = (props) => {
  const { pageTitle, children } = props
  return (
    <>
      <GlobalStyles />
      <main>
        <title>{pageTitle}</title>
        <StyledLayout>
          <ul className="nav-container">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </StyledLayout>
        {children}
      </main>
    </>
  )
}
export default Layout
