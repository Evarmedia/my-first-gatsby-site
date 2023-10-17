import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle='Company Home Page'>
      <p>I'm making this by following the gatsby tutorial</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

