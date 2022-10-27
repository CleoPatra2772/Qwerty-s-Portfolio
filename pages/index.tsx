import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Family } from '../components/Family';


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Qwerty's Portfolio</title>
        <link rel="icon" href="/paw-logo.png" />
      </Head>
      
      <Header/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Family */}
      <section id='family' className='snap-center'>
        <Family />
      </section>

      {/* {Skills} */}

      {/* Photos */}

      {/* Contact Me */}
      

      
    </div>
  )
}

export default Home
