
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Timeline } from '../typings';

type Props = {
timeline: Timeline[];
}

export const HerTimeline = ({timeline}: Props) => {

return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Timeline</h3>
        
        <div className="absolute  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-thumb-[#da3287]/80 scrollbar-track-gray-400/20">
        {/* projects */}
        {timeline.map((month, i) => (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <motion.img 
                
                className="w-[200px] h-[300px]"
                src= {urlFor(month.timelineImage).url()}
                alt='pic of qwerty'/>

                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                    <h4 className="text-4xl font-semibold text-center">
                        <span className="underline decoration-[#da3287]/50">[ {month.date} ] </span>
                        {month.age} </h4>
                   

                    <p className="text-lg text-center md:text-left">Weight: {month.weight}</p>
                    
                </div>
            </div>

        ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#e25098]/10 left-0 h-[500px] skew-y-12">

        </div>
    </motion.div>
)
}