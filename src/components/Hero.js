import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeroContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`

const HeroImage = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        anguillaImage: file(
          relativePath: { eq: "anguilla-shoal-bay-chairs.JPG" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.anguillaImage.childImageSharp.fluid} />}
  />
)

const StyledHeroImage = styled(HeroImage)`
  height: 200px;
`

// const TitleContainer = styled.div`
// `

// const Title = styled.h1`
//   font-family: 'Amatic SC', sans-serif;
//   background: linear-gradient(to right, #43e8d8 5%, #f54966 40%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin: 0;
// `

const Hero = ({ siteTitle }) => (
  <HeroContainer>
    <StyledHeroImage />
    {/* <TitleContainer>
      <Link
        style={{
          textDecoration: `none`,
        }}
        to="/">
        <Title>{siteTitle}</Title>
      </Link>
    </TitleContainer> */}
  </HeroContainer>
)

export default Hero
