import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectItem = ({ title, backgroundImage, projectUrl, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
      className="relative flex items-center justify-center h-[300px] w-full rounded-lg shadow-lg overflow-hidden group cursor-pointer bg-black"
    >
      <Image
        src={backgroundImage}
        alt={title || "Project Image"}
        layout="fill"
        objectFit="cover"
        className="transition duration-300 ease-in-out group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-center items-center text-center p-4">
        {/* <h3 className="text-white text-xl font-bold">{title || "Untitled Project"}</h3> */}
        {/* <p className="text-gray-300 text-sm">{desc || "No description available"}</p> */}
        <Link href={projectUrl || "#"} passHref>
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            View Project
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectItem;