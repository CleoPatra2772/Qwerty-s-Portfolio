import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Family } from "../typings";

type Props ={
    family: Family;
}

export const FamilyCard = ({family}: Props) => {
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
            src={urlFor(family.familyImage).url()}
            alt=""
            />

            <div className="px=0 md:px-10">
                <h4 className="text-4xl font-light"></h4>
                <p className="font-bold text-2xl mt-1">{family.role}</p>
                <div className="flex space-x-2 my-2"></div>
                <p>{family.message}</p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {/* <li>Summary Points</li>
                    <li>Summary Points</li> */}
                    
                    
                </ul>


            </div>
        </article>
    )
}