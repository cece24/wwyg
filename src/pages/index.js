import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Image from '../components/Image'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <div>
      <h1>The spectacle before us was indeed sublime.</h1>
      <p>
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside, the sable cloud beneath was dished out, and the
        car seemed to float in the middle of an immense dark sphere, whose upper
        half was strewn with silver. Looking down into the dark gulf below, I
        could see a ruddy light streaming through a rift in the clouds.
      </p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
