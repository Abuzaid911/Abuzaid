import React from 'react'
import Image from 'next/image'

const Skills = () => {
    return (
        <div  id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='flex justify-center tracking-wider text-[#fff] py-4 font-roboto Mono'>Skills</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TypeScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>ReactJs</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NextJs</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NodeJs</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg' width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Photoshop</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills