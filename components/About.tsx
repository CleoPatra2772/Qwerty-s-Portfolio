import {motion} from 'framer-motion';
import Image from 'next/image';
import sitting from '../asset/qwerty-sits.jpeg';

type Props ={

}
export const About = ({}: Props) => {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
        className="h-screen flex-col flex relative text-center md:text-left 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        
            <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition= {{
                duration: 1.2,
            }}
            whileInView= {{
                x: 0,
                opacity: 1,
            }}
            viewport= {{ once: true }}
        
            src="https://iili.io/DrVisR.jpg"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-66 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-70 xl:w-[350px] xl:h-[400px]'
            />

            <div className='space-y-10 px-0 md:px-10 '>
                <h4 className='text-4xl font-semibold'>Here is a {" "} <span className='underline decoration-[#e25098]/50 '>little</span> background</h4>
                <p className='text-base'>
                   I'm Qwerty, you may also know me as 'pupper'🌹. I am currently three months old.
                   Here are more things about me...  
                   My parents always told me that I'm a good girl, so I think I must be.{"   "}
                   I helped around as much as I could. I have four meals a day, and I poop a lot. 💩💩💩 I poop so much that I have to eat some of it, so my parents don't have to do too much of cleaning. 
                   My favorite toys are plastic water bottles, socks and shoes. My parents don't even have to buy me new toys, therefore I am good at saving 💰money.
                   Anyway, I enjoy going on walks! But I get excited easily and I can't control myself. So if you see me around, just wave and say hi, I'll wag my tail as fast as I could.</p>
                   

                
            </div>
           
        </motion.div>


    )
}