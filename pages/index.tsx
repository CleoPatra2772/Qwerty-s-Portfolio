import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Family } from '../components/Family';
import { Skills } from '../components/Skills';
import { Timeline } from '../components/Timeline';
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    scrollbar scrollbar-thumb-[#da3287]/80 scrollbar-track-gray-400/20'>
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
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Timeline */}
      <section id='timeline' className='snap-start'>
        <Timeline />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer '>
          <div className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'>
          <img src="" alt="" />
          </div>
        </footer>
      </Link>
      

      
    </div>
  )
}

export default Home
