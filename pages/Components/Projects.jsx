import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ZeePost from "/public/assets/projects/ZeePost.png";
import Portfolio from "/public/assets/projects/Portfolio.png";
import GM from "/public/assets/projects/GM.png";
import ProjectItem from "../../components/ProjectItem";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="py-4 text-center text-white font-mono text-3xl">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              // title: "ZeePost",
              backgroundImage: ZeePost,
              projectUrl: "https://zee-post.vercel.app",
              // desc: "Social App",
            },
            {
              // title: "Abuzaid Portfolio",
              backgroundImage: Portfolio,
              projectUrl: "https://abuzaid.vercel.app",
              // desc: "Portfolio",
            },
            {
              // title: "GreenMarmot",
              backgroundImage: GM,
              projectUrl: "https://gmm-ahmed.vercel.app",
              // desc: "Capsule Hotel",
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