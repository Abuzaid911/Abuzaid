'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ZeePost from "/public/assets/projects/ZeePost.png";
import Portfolio from "/public/assets/projects/Portfolio.png";
import GM from "/public/assets/projects/GM.png";
import OMW from "/public/assets/projects/OMW.png";
import Iftar from "/public/assets/projects/Iftar.png";
import ProjectItem from "../../components/ProjectItem";
import { useTheme } from '../../context/ThemeContext';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className={`py-4 text-center ${isDarkMode ? 'text-white' : 'text-black'} font-mono text-3xl`}>
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              backgroundImage: ZeePost,
              projectUrl: "https://zee-post.vercel.app",
            },
            {
              backgroundImage: Portfolio,
              projectUrl: "https://abuzaid.vercel.app",
            },
            {
              backgroundImage: GM,
              projectUrl: "https://gmm-ahmed.vercel.app",
            },
            {
              backgroundImage: OMW,
              projectUrl: "https://omw.abuzaid.dev",
            },
            {
              backgroundImage: Iftar,
              projectUrl: "https://contest-abuzaid911s-projects.vercel.app/",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProjectItem
                title={project.title}
                backgroundImage={project.backgroundImage}
                projectUrl={project.projectUrl}
                desc={project.desc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;