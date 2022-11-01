import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { HerFamily } from '../components/HerFamily';
import { HerSkills } from '../components/HerSkills';
import { HerTimeline } from '../components/HerTimeline';
import Link from 'next/link';
import { Skills } from "../typings";
import { Family } from "../typings";
import { Timeline } from "../typings";
import { fetchSkills } from '../utils/fetchSkills';
import { fetchFamily } from '../utils/fetchFamily';
import { fetchTimeline } from '../utils/fetchTimeline';
import type { GetStaticProps } from 'next';


type Props = {
  skills: Skills[];
  family: Family[];
  timeline: Timeline[];
}

const Home = ({family, skills, timeline}: Props) => {
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
        <HerFamily family={family} />
      </section>

      {/* {Skills} */}
      <section id='skills' className='snap-start'>
        <HerSkills skills={skills}/>
      </section>

      {/* Timeline */}
      <section id='timeline' className='snap-start'>
        <HerTimeline timeline={timeline}/>
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer '>
          <div className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'>
          {/* <img src="" alt="" /> */}
          </div>
        </footer>
      </Link>
      

      
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skills[] = await fetchSkills();
  const family: Family[] = await fetchFamily();
  const timeline: Timeline[] = await fetchTimeline();

  return {
    props: {
      skills,
      family,
      timeline
    },
    //Next.js will attempt to regenerate the page:
    //when a request comes in 
    //At most every 10 seconds

    revalidate: 10,
  }
}
