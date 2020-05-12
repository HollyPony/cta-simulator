import React from 'react'
import {
  Container,
} from 'reactstrap'

import Header from './Header'
import Navbar from './Navbar'
import TeamBuilder from './TeamBuilder'

const Layout = () => {
  return (
    <>
    <Header path="/" />
    <Container tag="main" className="mb-4">
      <Navbar />
      <TeamBuilder />
    </Container>
    {/* <div>
      footer
    </div> */}
    </>
  )
}

export default Layout
