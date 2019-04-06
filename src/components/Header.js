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
  font-family: 'Satisfy', cursive;
  font-size: 2.5rem;
  padding: 0.8rem;
  padding-bottom: 0.7rem;
  color: #fff;
  margin: 0;
`

const SecondaryTitle = styled.h1`
  font-family: 'Hind Vadodara', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: white;
  font-size: 0.8rem;
  margin-left: 4rem;
  margin-top: 0.5rem;
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
        <div
          style={{
            height: '2px',
            width: '100%',
            background:
              'linear-gradient(0.25turn, rgba(255, 223, 0, 0.7) 27%, white 50%, rgba(255, 223, 0, 0.7) 73%)',
          }}
        />
        <SecondaryTitle>Travels With Cece</SecondaryTitle>
      </Link>
    </TitleContainer>
  </HeaderContainer>
)

export default Header
