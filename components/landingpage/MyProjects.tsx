'use client'

import Image from "next/image";
import { Dot } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import Link from "next/link";
import { motion } from "motion/react";

const Projects = () => {
   return (
      <motion.div
         initial={{ opacity: 0, filter: "blur(2px)" }}
         whileInView={{ opacity: 1, filter: "blur(0px)" }}
         transition={{ duration: 1, ease: "easeIn" }}
         viewport={{ once: true }}
         className="mt-10 px-4 sm:px-6 md:px-10 lg:px-28 xl:px-48 md:mb-2">
         <span className="text-2xl md:text-4xl xl:text-5xl font-medium">
            My Projects
         </span>

         <div className="flex flex-col items-start gap-1 mt-2 md:mt-4 xl:mt-6 text-xs lg:text-base font-medium text-[#999999]">
            <p>A small step in my learning journey.</p>
            <p>Created with passion and attention to detail.</p>
         </div>

         <div className="mt-8 lg:mt-9 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 md:overflow-x-auto whitespace-nowrap 
         scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projectsData.map(
               ({ id, project_name, project_type, project_pic, month, year }, index) => (
                  <div key={index} className="flex flex-col overflow-hidden mb-2">
                     <Link href={`/project/${id}`}
                        className="
                         group relative cursor-pointer w-full h-48 
                         overflow-hidden rounded-xl"
                     >
                        <Image
                           src="/Project_cover_pic.jpg"
                           alt="Cover_pic"
                           fill
                           className="object-cover transition-all duration-500 ease-in-out 
                             opacity-100 scale-105 group-hover:opacity-0 group-hover:scale-100"
                        />

                        <Image
                           src={project_pic}
                           alt={`${project_name}`}
                           fill
                           className="object-cover transition-all duration-500 ease-in-out 
                             opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                        />

                        <span className="absolute top-2 lg:top-3 left-3 md:left-4 px-3 rounded-full bg-[#201F1F] font-light text-[10px] lg:text-xs
                         leading-[30px] transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                           {project_type}
                        </span>
                     </Link>

                     <span className="mt-3 md:mt-6 font-normal text-lg text-center md:text-left">
                        {project_name}
                     </span>

                     <div className="flex mt-1 md:mt-2 items-center justify-center md:justify-start ">
                        <span className="font-normal text-xs xl:text-sm text-[#999999]">{year}</span>
                        <Dot className="text-[#999999]" />
                        <span className="font-normal text-xs xl:text-sm text-[#999999]">{month}</span>
                     </div>
                  </div>
               )
            )}
         </div>
      </motion.div >
   );
};

export default Projects;
