import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Head from 'next/Head'

export const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>Personal Portfolio</title>
    </Head>
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container></>
  )
}
