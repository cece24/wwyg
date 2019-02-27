import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  padding: 0.5rem 1rem;
  z-index: 103;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  font-family: 'Amatic SC', sans-serif;
  font-size: 3rem;
  color: #fff;
  margin: 0;
  margin-left: 2rem;
  width: 20rem;
`

const SecondaryTitle = styled.h1`
  font-family: 'La Belle Aurore', sans-serif;
  font-size: 2.5rem;
  line-height: 5rem;
  color: rgba(137, 236, 218, 0.8);
  position: relative;
  width: 100%;
  top: -2.1rem;
  left: 5rem;
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
        <SecondaryTitle>By Cece</SecondaryTitle>
      </Link>
    </TitleContainer>
  </HeaderContainer>
)

export default Header
