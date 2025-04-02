// "use client";

// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section id="about" className="w-11/12 md:w-10/12 mx-auto md:h-screen p-2 flex items-center py-16">
//       <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
//         <div className="col-span-2">
//           <h2 className="py-4 text-3xl font-mono text-white">About Me</h2>
//           <p className="font-mono text-gray-300 leading-relaxed">
//           I’m a passionate web developer who loves crafting seamless digital experiences. When I’m not coding, you’ll find me on the basketball court—or passionately debating why LeBron James is, without a doubt, the GOAT (sorry, MJ fans). <br /><br />
//           Beyond the hoop dreams and clean UI layouts, I’m always on a quest to expand my tech skill set. I love exploring how technology can simplify everyday challenges, create innovative solutions, and, let’s be honest, make life a little more fun. 
//           </p>
//         </div>
//         <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
//           <Image
//             className="rounded-xl"
//             src="https://abuzaid-portfolio.vercel.app/static/media/hero.98a0ccfffa631af9a276.jpg"
//             alt="Portrait of Ahmed Abuzaid"
//             width={500}
//             height={500}
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
'use client'
import React from "react";
import Image from "next/image";
import { useTypingEffect } from "../../components/useTypingEffect"; // Import Hook
import { motion } from "framer-motion";

const About = () => {
    const typedTitle = useTypingEffect("About Me", 100); // Dynamic typing effect

    return (
        <motion.section
            id="about"
            className="w-11/12 md:w-10/12 mx-auto p-4 flex items-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <section id="about" className="w-11/12 md:w-10/12 mx-auto md:h-screen p-2 flex items-center py-16">
                <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <h2 className="py-4 text-3xl font-mono text-white">About Me</h2>
                        <p className="font-mono text-gray-300 leading-relaxed">
                            I’m a passionate web developer who loves crafting seamless digital experiences. When I’m not coding, you’ll find me on the basketball court—or passionately debating why LeBron James is, without a doubt, the GOAT (sorry, MJ fans). <br /><br />
                            Beyond the hoop dreams and clean UI layouts, I’m always on a quest to expand my tech skill set. I love exploring how technology can simplify everyday challenges, create innovative solutions, and, let’s be honest, make life a little more fun.
                        </p>
                    </div>
                    <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
                        <Image
                            className="rounded-xl"
                            src="https://abuzaid-portfolio.vercel.app/static/media/hero.98a0ccfffa631af9a276.jpg"
                            alt="Portrait of Ahmed Abuzaid"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </section>
        </motion.section>
    );
};

export default About;