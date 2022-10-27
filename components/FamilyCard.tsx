import { motion } from "framer-motion";

type Props ={}

export const FamilyCard = ({}: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] h-[460px]
        md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
            src="https://www.upwork.com/profile-portraits/c1NzaROaPnxIAHjGamgzmo50LcQXaE6CrEtups8X9xIEAGaRixWEHJXv2AnuQ2v8Hr"
            alt=""
            />

            <div className="px=0 md:px-10">
                <h4 className="text-4xl font-light">Cleo</h4>
                <p className="font-bold text-2xl mt-1">Qwerty's Mommy</p>
                <div className="flex space-x-2 my-2"></div>
                <p>"Qwerty is an amazing dog, we are so glad that she is part of our family."</p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    
                    
                </ul>


            </div>
        </article>
    )
}