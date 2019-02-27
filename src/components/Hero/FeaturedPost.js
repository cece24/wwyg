import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { fadeIn, raiseIn } from '../../theme/animations'

const FeaturedPostContainer = styled.div`
  position: absolute;
  color: #fff;
  margin-left: 4rem;
  width: 50vw;
  height: 60vh;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PostTitle = styled.h1`
  font-family: 'Poiret One', sans-serif;
  color: #fff;
  align-self: center;
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 5rem;
  margin: 0;

  opacity: 0;
  ${fadeIn}
  ${raiseIn}
  -webkit-animation: fadeIn 1.2s ease-in 0.3s forwards,
    raiseIn 1.2s ease-in .3s forwards;
  animation: fadeIn 1.2s ease-in 0.3s forwards,
    raiseIn 1.2s ease-in 0.3s forwards;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const PostTag = styled(PostLink)`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;

  opacity: 0;
  ${fadeIn}
  ${raiseIn}
  -webkit-animation: fadeIn 1s ease-in 0.2s forwards,
  raiseIn 1s ease-in 0.2s forwards;
  animation: fadeIn 1s ease-in 0.2s forwards, raiseIn 1s ease-in 0.2s forwards;
`

const PostButton = styled(PostTag)`
  border: 1px rgba(255, 255, 255, 0.8) solid;
  position: relative;
  top: 0;
  width: 10rem;
  margin-top: 0.7rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  transition: top 0.2s linear;

  opacity: 0;
  ${fadeIn}
  ${raiseIn}
  -webkit-animation: fadeIn 1.3s ease-in 0.5s forwards,
  raiseIn 1.3s ease-in 0.5s forwards;
  animation: fadeIn 1.3s ease-in 0.5s forwards,
    raiseIn 1.3s ease-in 0.5s forwards;

  p {
    margin: 0;
  }

  &:hover {
    top: -0.3rem;
    background-color: #fff;
    p {
      color: rgba(137, 236, 218, 0.8);
    }
  }
`

const FeaturedPost = ({ tag, url, title }) => (
  <FeaturedPostContainer>
    <PostTag to={`/tags/${tag}`}>{tag}</PostTag>
    <PostLink to={`/blog/${url}`}>
      <PostTitle>{title}</PostTitle>
    </PostLink>
    <PostButton to={`/blog/${url}`}>
      <p>Read More</p>
    </PostButton>
  </FeaturedPostContainer>
)

export default FeaturedPost
