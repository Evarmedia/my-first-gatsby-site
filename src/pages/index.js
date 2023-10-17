import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle='Company Home Page'>
      <p>I'm making this by following the gatsby tutorial</p>
      <StaticImage 
      alt="clifford the cowardly dog."
      src="../images/wall.jpg"
      />
      
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

