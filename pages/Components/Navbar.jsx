'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaSun, FaMoon } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '/public/assets/navLogo.png';
import NewLogo from '/public/assets/projects/newlogo.png';
import { useTheme } from '../../context/ThemeContext';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";


// import { useRouter } from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#111');
    const [linkColor, setLinkColor] = useState('#ecf0f3');
    const { isDarkMode, toggleTheme } = useTheme();
    
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    useEffect(() => {
        // Update navbar colors based on theme
        if (isDarkMode) {
            setNavBg('#000');
            setLinkColor('#ffffff');
        } else {
            setNavBg('#ffffff');
            setLinkColor('#000');
        }
    }, [isDarkMode]);

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
                    : 'fixed w-full h-20 z-[100]'
            }
        >
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link legacyBehavior href='/'>
                    <a className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold cursor-pointer`}>
                        Abu<span className='text-indigo-700'>z</span>aid
                    </a>
                </Link>

                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex items-center'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#skills'>Skills</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#projects'>Projects</Link>
                        </li>
                        <li className='ml-10'>
                            <button 
                                onClick={toggleTheme} 
                                className='p-2 rounded-full'
                            >
                                {isDarkMode ? (
                                    <IoSunnyOutline className='' size={20} />
                                ) : (
                                    <IoMoonOutline className='' size={20} />
                                )}
                            </button>
                        </li>
                    </ul>

                    <div className='flex items-center md:hidden'>
                        <button 
                            onClick={toggleTheme} 
                            className='p-2 mr-3 rounded-full shadow-none'
                        >
                            {isDarkMode ? (
                                <IoSunnyOutline className='' size={20} />
                            ) : (
                                <IoMoonOutline className='' size={20} />
                            )}
                        </button>
                        <div
                            style={{ color: `${linkColor}` }}
                            onClick={handleNav}
                        >
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ` fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen ${isDarkMode ? 'bg-[#000]' : 'bg-[#ffffff]'} p-10 ease-in duration-500`
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link legacyBehavior href='/'>
                                <a className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold cursor-pointer`}>
                                    Abu<span className='text-indigo-700'>z</span>aid
                                </a>
                            </Link>
                            <div
                                onClick={handleNav}
                                className={`rounded-full shadow-sm ${isDarkMode ? 'shadow-white' : 'shadow-black'} p-3 cursor-pointer`}
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className={`border-b ${isDarkMode ? 'border-gray-300' : 'border-gray-700'} my-4`}>
                            <p className={`w-[85%] md:w-[90%] py-4 font-mono ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                Let&#39;s have fun!
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className={`uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    About
                                </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Skills
                                </li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Projects
                                </li>
                            </Link>

                        </ul>
                        <div className='pt-32'>
                            <p className='uppercase tracking-widest text-indigo-700'>
                                Let&#39;s Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/ahmed-abuzaid-a65732185/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className={`rounded-full shadow-lg ${isDarkMode ? '' : 'shadow-black'} p-3 cursor-pointer hover:scale-105 ease-in duration-300`}>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/Abuzaid911'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className={`rounded-full shadow-lg ${isDarkMode ? '' : 'shadow-black'} p-3 cursor-pointer hover:scale-105 ease-in duration-300`}>
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href='mailto:sabobee911@gmail.com'>
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className={`rounded-full shadow-lg ${isDarkMode ? '' : 'shadow-black'} p-3 cursor-pointer hover:scale-105 ease-in duration-300`}
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;