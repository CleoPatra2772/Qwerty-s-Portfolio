import { motion } from "framer-motion";
import { FamilyCard } from "./FamilyCard";

export const Family = () => {
    return(
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView= {{ opacity: 1}}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
        max-w-full px-10 justify-evenly mx-auto items-center ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Family
            </h3>

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-thumb-[#da3287]/80 scrollbar-track-gray-400/20">
                {/* Family Member*/}
                <FamilyCard />
                {/* Family Member*/}
                <FamilyCard />
                {/* Family Member*/}
                <FamilyCard />
            </div>
        </motion.div>
    )
}