import React from 'react'

const About = () => {
    return (
        <div id='about' className=' w-11/12 md:w-10/12 mx-auto md:h-screen p-2 flex items-center py-16'>
            <div className='max-width[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h2 className='py-4 font-roboto Mono text-[#fffefe] flex justify-center'>About Me</h2>
                    <p className='font-mono text-[#cfcfcf]'>
                        I&#39;m a 22 years old student studying Information Systems at cairo university. I&#39;m passionate about web development and design,
                        Also i&#39;m an avid basketball fan who loves both playing and watching, My fav player is none other than the GOAT LeBron James.
                        And i&#39;m always looking for new ways to expand my knowledge and skillset in the tech world.
                        I&#39;m excited to see how technology can be used to create solutions to everyday problems and to create experiences that make life more enjoyable.
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-[#1f1c21] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src="https://abuzaid-portfolio.vercel.app/static/media/hero.98a0ccfffa631af9a276.jpg" alt="/">
                    </img>
                </div>
            </div>

        </div>
    )
}

export default About