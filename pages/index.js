/* eslint-disable linebreak-style */
import Head from 'next/head'
import Inspect from 'inspx'
import NavBar from '../components/Navbar/Navbar'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Easings saver</title>
        <meta name="description" content="A safe place to keep your cubic bezier functions" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Inspect>
        <NavBar />
        <Layout />
      </Inspect>
    </>
  )
}
