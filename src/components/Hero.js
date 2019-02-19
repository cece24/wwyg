import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const HeroContainer = styled.div`
  position: relative;
  width: 1250px;
  left: -1.5rem;
  top: 1rem;
  margin-bottom: 3rem;
`

const HeroImage = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        anguillaImage: file(relativePath: { eq: "anguilla-shoal-bay.JPG" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <BackgroundImage
          className={className}
          fluid={data.anguillaImage.childImageSharp.fluid}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledHeroImage = styled(HeroImage)`
  width: 100%;
  height: 548px;
  background-position: center center;
  background-size: cover;
  border-radius: 0.5%;
`

const HeroFeaturedPostContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  margin: auto;
  margin-top: 2rem;
  width: 704px;
  height: 426px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

const Title = styled.h1`
  font-family: 'Dawning of a New Day', sans-serif;
  // background: linear-gradient(to right, #43e8d8 5%, #f54966 40%);
  background-color: #2a2a2a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin: 0 auto;
  font-size: 3rem;
  line-height: 5rem;
`

const Hero = ({ siteTitle }) => (
  <HeroContainer>
    <StyledHeroImage>
      <HeroFeaturedPostContainer>
        <Title>Gorgeous white sand beaches in Anguilla</Title>
      </HeroFeaturedPostContainer>
    </StyledHeroImage>
  </HeroContainer>
)

export default Hero
