import { Cursor, useTypewriter} from 'react-simple-typewriter';
import { BackgroundCircles } from './BackgroundCircles';
import  qwertyPic  from '../asset/qwerty.jpeg';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export const Hero = ({}: Props) => {
const [text, count] = useTypewriter({
    words: [
        "Hello World! My name is Qwerty ;)",
        "I am a Golden Retriever."],
        loop: true,
        delaySpeed: 2000,
});


return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image src={qwertyPic} alt='pic of Qwerty' 
        objectFit="contain"
        width={140}
        height={140}
        className='rounded-full relative'/>
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Woof Woof</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#e25098" />

        </h1>
        <div className='pt-5'>
             <Link href="#about">
             <button  className='heroButton'>About</button>
             </Link>

             <Link href="#family">
             <button className='heroButton'>Family</button>
             </Link>

             <Link href="#skills">
             <button className='heroButton'>Skills</button>
             </Link>

             <Link href="#timeline">
             <button className='heroButton'>Timeline</button>
             </Link>
         </div>
         </div>
    </div>
);
}

