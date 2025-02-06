// import React from 'react'
// import { AiOutlineMail } from 'react-icons/ai'
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

// const Main = () => {
//     return (
//         <div className='w-full h-screen text-center'>
//             <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
//                 <div>

//                     <h1>
//                         Hi, It&#39;s <span className='text-[#f2eeee]'> Abu<span className='text-[#b538af]'>z</span>aid</span>
//                     </h1>

//                     <h1 className='py-2 text-[#fff]'>
//                         A <span className='text-[#b538af]'>Front</span>-<span className='text-[#b538af]'>End</span> Developer
//                     </h1>
//                     <p className="uppercase text-sm tracking-widest text-[#e6e2e688] py-4">
//                         Enjoy Exploring
//                     </p>
//                     <div className='flex items-center justify-center gap-4 max-w-[330px] m-auto py-8'>
//                         <a
//                             href='https://www.linkedin.com/in/ahmed-abuzaid-a65732185/'
//                             target='_blank'
//                             rel='noreferrer'
//                         >
//                             <div className='rounded-full p-5 cursor-pointer hover:scale-150 ease-in duration-300'>
//                                 <FaLinkedinIn />

//                             </div>
//                         </a>
//                         <a
//                             href='https://github.com/Abuzaid911'
//                             target='_blank'
//                             rel='noreferrer'
//                         >
//                             <div className='rounded-full p-5 cursor-pointer hover:scale-150 ease-in duration-300'>
//                                 <FaGithub />
//                             </div>
//                         </a>
//                         <a
//                             href='mailto:AhmedMohammedAbuzaidAli@gmail.com'
//                             target='_blank'
//                             rel='noreferrer'
//                         >
//                             <div className='rounded-full p-5 cursor-pointer hover:scale-150 ease-in duration-300'>
//                                 <AiOutlineMail />
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default Main

import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { TypingEffect } from "./Typing-effect";

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
                <div>

                    <h1 className="text-xl font-bold md:text-6xl lg:text-4xl bg-gradient-to-r from-purple-200 to-indigo-700 text-transparent bg-clip-text">
                        Full-Stack Developer specializing in{" "}
                        <TypingEffect className="whitespace-nowrap" words={["React", "Nextjs", "Java", "Web Development"]} />
                    </h1>

                    <p className="uppercase text-sm tracking-widest text-[#e6e2e6b3] py-4">
                        Enjoy Exploring
                    </p>

                    <div className='flex items-center justify-center gap-4 max-w-[330px] m-auto py-8'>
                        <a
                            href='https://www.linkedin.com/in/ahmed-abuzaid-a65732185/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full p-5 cursor-pointer hover:scale-150 ease-in duration-300'>
                                <FaLinkedinIn />

                            </div>
                        </a>
                        <a
                            href='https://github.com/Abuzaid911'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full p-5 cursor-pointer hover:scale-150 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <a
                            href='mailto:AhmedMohammedAbuzaidAli@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full p-5 cursor-pointer hover:scale-150 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main
