import React from "react"
import { graphql } from "gatsby"
import Section from "../components/section"
import Layout from "../components/layout"
import Home from "../components/home"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Landings from "../components/landings"
import Contact from "../components/contact"
import SEO from "../components/seo"

interface IndexPageProps {
  data: any
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___id] }) {
      nodes {
        frontmatter {
          title
          stack
          stackHeading
          heading
          paragraph
          id
        }
      }
    }
  }
`

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const sections = data.allMarkdownRemark.nodes
  const components = {
    Home: Home,
    About: About,
    Portfolio: Portfolio,
    Landings: Landings,
    Contact: Contact,
  }
  return (
    <Layout>
      <SEO title="Marcin Janus" />
      <main>
        {sections.map(section => {
          const Component = components[section.frontmatter.title]
          return (
            <Section
              key={section.frontmatter.id}
              id={`0${section.frontmatter.id}.`}
              title={section.frontmatter.title}
            >
              {inView => (
                <Component data={section.frontmatter} inView={inView} />
              )}
            </Section>
          )
        })}
      </main>
    </Layout>
  )
}

export default IndexPage
