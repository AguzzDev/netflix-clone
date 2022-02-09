import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import Loader from 'components/Loader'
import Inicio from "components/Inicio"

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5700)

  }, [])

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/nlogo.png" />
      </Head>

      {loading
        ? <Loader />
        : <Inicio />
      }

    </>
  )
}

export default Home
