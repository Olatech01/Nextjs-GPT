"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='w-full'>
        <nav className='flex justify-around items-center py-[20px] w-full'>
            <div className='flex text-white gap-4'>
                <Image height={100} width={100} src={"/logo.svg"}/>
                <ul className='flex gap-4 sm:hidden text-dimWhite'>
                    <li>Home</li>
                    <li>What is GPT?</li>
                    <li>Open AI</li>
                    <li>Case Studies</li>
                    <li>Library</li>
                </ul>
            </div>
            <div className='sm:hidden flex gap-[20px] text-white'>
                <button className='border-[#FF4820] border text-[#FFFF] rounded-lg py-2 px-3'>Sign In</button>
                <button className='bg-[#FF4820] text-[#FFFF] rounded-lg py-2 px-3'>Sign Up</button>
            </div>
            <button className='hidden bg-dimWhite sm:block rounded-xl bg-blue-gradient p-2 text-black' onClick={() => setToggleMenu(!toggleMenu)}>
                {
                    toggleMenu? <RiCloseLine /> : <RiMenu3Line />
                }
            </button>
        </nav>
            
        <div className={`${!toggleMenu ? "hidden" : "flex"} text-white gap-[30px] p-3 bg-black-gradient absolute top-20 right-0 mx-1 my-2 min-w-[150px] rounded-xl sidebar`}>
            <ul className="text-dimWhite flex flex-col gap-4 w-full">
                <li>Home</li>
                <li>What is GPT3?</li>
                <li>Open AI</li>
                <li>Case Studies</li>
                <li>Library</li>
                <button className='border-[#FF4820] border w-full text-[#FFFF] rounded-lg py-2 px-3'>Sign In</button>
                <button className='bg-[#FF4820] text-[#FFFF] rounded-lg py-2 px-3'>Sign Up</button>
            </ul>
            
        </div>
            
        
    </div>
  )
}

export default Navbar