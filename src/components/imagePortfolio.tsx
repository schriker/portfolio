import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImagePortfolio: React.FC<{ fileName: string, alt: string }> = ({ fileName, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 450, quality: 80) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.edges.find(image => image.node.fluid.originalName === fileName)

  if (image) {
    return <Img alt={alt} fluid={image.node.fluid} />
  } else {
    return <img src="" alt={fileName} />
  }
}

export default ImagePortfolio
