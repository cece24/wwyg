import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import { fadeIn, raiseIn, zoomIn } from '../../theme/animations'
import FeaturedPost from './FeaturedPost'

const HeroContainer = styled.div`
  max-width: 1600px;
  margin-bottom: 3rem;
  height: 100vh;
  display: flex;
  overflow: hidden;

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
  width: 100%;
  background-position: center;
  background-size: cover;

  ${zoomIn}
  -webkit-animation: 10s forwards zoomIn;
  animation: 10s forwards zoomIn;
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

const NavLink = styled(Link)`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: 0.8rem;
  text-decoration: none;
  color: inherit;
`

const NavItem = styled.div`
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
      currentIndex: 0,
    }
  }

  componentDidMount() {
    this.autoPlay = setInterval(() => {
      this.changeIndex()
    }, 4000)
  }

  changeIndex = newIndex => {
    if (this.state.currentIndex === 2) {
      return this.setState({
        currentIndex: 0,
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }))
  }

  render() {
    return (
      <HeroContainer>
        <StyledHeroImage imgName="anguilla" />

        <FeaturedPost
          tag="beach paradise"
          url="anguilla"
          title="Gorgeous white sand beaches in Anguilla"
        />

        <NavContainer>
          <NavLink to="/">
            <NavItem active={this.state.currentIndex === 0}>
              <p>Gorgeous white sand beaches in Anguilla</p>
            </NavItem>
          </NavLink>
          <NavLink to="/">
            <NavItem active={this.state.currentIndex === 1}>
              <p>Turquoise waters in Tulum</p>
            </NavItem>
          </NavLink>
          <NavLink to="/">
            <NavItem active={this.state.currentIndex === 2}>
              <p>Night market in Shanghai</p>
            </NavItem>
          </NavLink>
        </NavContainer>
      </HeroContainer>
    )
  }
}

export default Hero
