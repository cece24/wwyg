import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import { fadeIn, raiseIn, zoomIn } from '../../theme/animations'
import FeaturedPost from './FeaturedPost'

const HeroSlidesData = [
  {
    title: 'Gorgeous white sand beaches in Anguilla',
    tag: 'beach paradise',
    imgName: 'anguilla',
    url: 'anguilla',
  },
  {
    title: 'Turquoise waters in Tulum',
    tag: 'beach paradise',
    imgName: 'mexico',
    url: 'mexico',
  },
  {
    title: 'Night market in Shanghai',
    tag: 'asia',
    imgName: 'shanghai',
    url: 'shanghai',
  },
]

const HeroContainer = styled.div`
  max-width: 1600px;
  margin-bottom: 3rem;
  height: 100vh;
  display: flex;

  opacity: 0;
  ${fadeIn}
  -webkit-animation: fadeIn 1s ease-in 0.3s forwards;
  animation: fadeIn 1s ease-in 0.3s forwards;
`

const HeroImage = ({ children, className, imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        anguilla: file(relativePath: { eq: "anguilla-shoal-bay.JPG" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        mexico: file(relativePath: { eq: "mex-resort-beach.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        shanghai: file(relativePath: { eq: "shanghai.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
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
          fluid={data[imgName].childImageSharp.fluid}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledHeroImage = styled(HeroImage)`
  position: absolute;
  height: 100vh;
  background-position: center;
  background-size: cover;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease, visibility 0.8s ease;

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    visibility: visible;
    ${zoomIn}
    -webkit-animation: 10s forwards zoomIn;
    animation: 10s forwards zoomIn;
  `};
`

const HeroSlide = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.3;
    z-index: 100;
    background-image: linear-gradient(to right top, #000000, rgba(0,0,0, 0) 40%);
}
`

const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  color: #fff;
  z-index: 102;
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;

  opacity: 0;
  ${fadeIn}
  ${raiseIn}
  -webkit-animation: fadeIn 1.6s ease-in 0.3s forwards,
    raiseIn 1.6s ease-in .3s forwards;
  animation: fadeIn 1.6s ease-in 0.3s forwards,
    raiseIn 1.6s ease-in 0.3s forwards;
`

const NavItem = styled.div`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
  color: #fff;
  width: 15vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-top: 2px rgba(255, 255, 255, 0.5) solid;
  transition: border-top 0.7s ease-in-out;

  p {
    position: relative;
    top: 0.5rem;
    transition: top 0.8s ease;

    &:hover {
      top: -0.3rem;
    }
  }

  ${({ active }) =>
    active &&
    `
    border-top: 4px rgba(255, 255, 255, 0.8) solid;
    
    p {
      top: -0.3rem;
      font-weight: 500;
    }
    `};
`

class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlideIndex: 0,
    }
  }

  componentDidMount() {
    this.autoplayId = setInterval(() => {
      this.changeIndex()
    }, 8000)
  }

  resetAutoplay() {
    clearInterval(this.autoplayId)
  }

  changeIndex = newIndex => {
    if (newIndex) {
      return this.setState({
        currentSlideIndex: newIndex,
      })
    }

    if (this.state.currentSlideIndex === 2) {
      return this.setState({
        currentSlideIndex: 0,
      })
    }

    this.setState(prevState => ({
      currentSlideIndex: prevState.currentSlideIndex + 1,
    }))
  }

  render() {
    return (
      <HeroContainer>
        {HeroSlidesData.map((slide, index) => (
          <HeroSlide key={index}>
            <StyledHeroImage
              imgName={slide.imgName}
              active={this.state.currentSlideIndex === index}
            />
            <FeaturedPost
              active={this.state.currentSlideIndex === index}
              tag={slide.tag}
              url={slide.url}
              title={slide.title}
            />
          </HeroSlide>
        ))}
        {/* <GradientOverlay /> */}

        <NavContainer>
          {HeroSlidesData.map((slide, index) => (
            <NavItem
              active={this.state.currentSlideIndex === index}
              onClick={() => {
                this.changeIndex(index)
                this.resetAutoplay()
              }}>
              <p>{slide.title}</p>
            </NavItem>
          ))}
        </NavContainer>
      </HeroContainer>
    )
  }
}

export default Hero
