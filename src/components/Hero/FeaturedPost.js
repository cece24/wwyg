import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { fadeIn, raiseIn } from '../../theme/animations'

const FeaturedPostContainer = styled.div`
  position: absolute;
  top: 9rem;
  color: #fff;
  margin-left: 4rem;
  width: 40vw;
  height: 60vh;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 102;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease, visibility 0.8s ease;

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    visibility: visible;
  `};
`

const PostTitle = styled.h1`
  font-family: 'Hind Guntur', sans-serif;
  color: #fff;
  align-self: center;
  font-size: 3.5rem;
  font-weight: 600;
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
  letter-spacing: 3px;
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
    background-color: rgba(255, 255, 255, 0.4);
    border: none;
    p {
      color: #faf9f6;
      // color: rgba(137, 236, 218, 0.8);
    }
  }
`

const FeaturedPost = ({ active, tag, url, title }) => (
  <FeaturedPostContainer active={active}>
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
