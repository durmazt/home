/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
     <div
        style={{
          margin: `60px auto`,
          maxWidth: `770px`,
          padding: `0px 1.0875rem 1.45rem`,
          boxSizing: `border-box`,
          paddingTop: `0`,
          width: `100%`
          
        }}
      >
        <main>{children}</main>
      </div>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
/**
      */