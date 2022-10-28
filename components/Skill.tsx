import { motion } from 'framer-motion';

type Props = {
    directionLeft? : boolean;
}

export const Skill = ({directionLeft}: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{ 
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition= {{ duration: 1}}
        whileInView ={{ opacity: 1, x: 0}}
        src="https://media.istockphoto.com/vectors/outlined-cute-golden-retriever-sitting-and-waving-hand-vector-id1273662011?k=20&m=1273662011&s=612x612&w=0&h=hb5WRZVSrSp6Bk6w-dbroUg0pxtBo_9O7bfD-vyQTNA="
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:blur-sm transition duration-300 ease-in-out'
        >
        </motion.img>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
        </div>
    )
}