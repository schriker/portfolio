import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type MetaProperty =
  | {
      name: string
      content: any
      property?: undefined
    }
  | {
      property: string
      content: any
      name?: undefined
    }

interface SEOProps {
  description?: string
  lang?: string
  meta?: MetaProperty[]
  title: string
}

const SEO: React.FC<SEOProps> = ({
  description = "",
  lang = "pl",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://www.janusmarcin.pl/portfolio.jpg`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    ></Helmet>
  )
}

export default SEO
