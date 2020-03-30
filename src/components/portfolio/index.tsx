import React from "react"
import PortfolioItem from "./portfolioItem"
import { useStaticQuery, graphql } from "gatsby"
import { Project } from "../types/portfolio"
import styles from "./portfolio.module.css"

const Portfolio: React.FC = () => {
  const { allProjectsJson: { edges }  } = useStaticQuery(graphql`
  query PortfolioQuery {
    allProjectsJson {
      edges {
        node {
          github
          description
          img
          link
          name
          stack
        }
      }
    }
  }`)

  const projects = Array.from<any, Project>(edges, (edge) => {
    return {
      ...edge.node
    }
  })
  return (
    <div className={styles.container}>
      {projects.map((project, index) => <PortfolioItem key={index} data={project} />)}
    </div>
  )
}

export default Portfolio
