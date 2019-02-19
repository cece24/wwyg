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
  height: 4rem;
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
  font-size: 3rem;
  width: 20rem;
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
      </Link>
    </TitleContainer>
  </HeaderContainer>
)

export default Header
