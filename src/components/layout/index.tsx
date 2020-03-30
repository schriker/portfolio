import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"
import Footer from "../footer"
import "./normalize.css"
import "./layout.css"

interface LayoutProps {
  children: React.ReactNode
}

type Node = {
  id: string
  frontmatter: {
    id: number
    title: string
  }
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query HeaderLinks {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___id] }) {
        nodes {
          frontmatter {
            id
            title
          }
        }
      }
    }
  `)

  const links = Array.from(nodes, (node: Node) => ({
    id: node.frontmatter.id,
    title: node.frontmatter.title,
  }))

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Header links={links} />
        {children}
      </div>
      <Footer text="Built with GatsbyJS" />
    </div>
  )
}

export default Layout
