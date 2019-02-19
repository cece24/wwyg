import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  height: 5rem;
  padding: 0.5rem 1rem;
`

const TitleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-family: 'Amatic SC', sans-serif;
  background: linear-gradient(to right, #43e8d8 5%, #f54966 40%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  margin-left: 2rem;
  font-size: 3rem;
  width: 20rem;
`

const TitleOverlay = styled.h1`
  font-family: 'La Belle Aurore', sans-serif;
  // background: linear-gradient(to right, #43e8d8 5%, #7f7f7f 40%);
  background-color: rgba(137, 236, 218, 0.8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: -2.1rem;
  left: 5rem;
  font-size: 2.5rem;
  width: 100%;
  line-height: 5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <TitleContainer>
      <Link
        style={{
          textDecoration: `none`,
        }}
        to="/">
        <Title>{siteTitle}</Title>
        <TitleOverlay>By Cece</TitleOverlay>
      </Link>
    </TitleContainer>
  </HeaderContainer>
)

export default Header
