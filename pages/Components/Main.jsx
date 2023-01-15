import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
                <div>

                    <h1>
                        Hi, It&#39;s <span className='text-[#f2eeee]'> Abu<span className='text-[#b538af]'>z</span>aid</span>
                    </h1>

                    <h1 className='py-2 text-[#fff]'>
                        A <span className='text-[#b538af]'>Front</span>-<span className='text-[#b538af]'>End</span> Developer
                    </h1>
                    <p className="uppercase text-sm tracking-widest text-[#e6e2e688] py-4">
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
                            href='mailto:sabobee911@gmail.com'
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