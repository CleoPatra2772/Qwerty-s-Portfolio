import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Qwerty's Portfolio</title>
        <link rel="icon" href="/paw-logo.png" />
      </Head>
      <h1 className='text-red-800 text-3xl'>Hello World</h1>

      
    </div>
  )
}

export default Home
