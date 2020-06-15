import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({name}) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "aliyevalogo-f.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      image1: file(relativePath: { eq: "home4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      image2: file(relativePath: { eq: "home3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      image3: file(relativePath: { eq: "image_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      image4: file(relativePath: { eq: "image_4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  switch(name) {
    case 'logo':
      return <Img fluid={data.logo.childImageSharp.fluid} />
    case 'home-img1':
      return <Img fluid={data.image1.childImageSharp.fluid} />
    case 'home-img2':
      return <Img fluid={data.image2.childImageSharp.fluid} />
    case 'practice-area1':
      return <Img fluid={data.image3.childImageSharp.fluid} />
    case 'practice-area2':
      return <Img fluid={data.image4.childImageSharp.fluid} />
    default:
      return 'Nothing to show'
  }
}

Image.propTypes = {
  name: PropTypes.string.isRequired
}

export default Image
