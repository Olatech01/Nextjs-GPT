import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#031B34] w-full py-[30px] gap-[50px] sm:px-[20px]'>
        <div>
            <h1 className="gradient__text font-extrabold sm:font-normal text-[52px] sm:text-[30px] text-center">Do you want to step in to the <br className='sm:hidden'/> future before others</h1>
        </div>
        <div className='p-[15px] flex items-center justify-center text-center w-[50%] sm:w-[70%]'>
            <p className='border-[#FFF] border text-dimWhite w-[100%]'>Request Early Access</p>
        </div>
        <div className='flex justify-between w-[80%] sm:w-full sm:flex-col sm:gap-[20px]'>
            <div className='flex flex-col gap-[15px]'>
                <Image height={100} width={100} src={"/logo.svg"}/>
                <p className='text-[#FFF] text-[15px]'>Crechterwoord K12 182 DK <br className='sm:hidden'/> Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4 className='text-[#FFF] text-[25px]'>Links</h4>
                <p className='text-[#FFF] text-[15px]'>Overons</p>
                <p className='text-[#FFF] text-[15px]'>Social Media</p>
                <p className='text-[#FFF] text-[15px]'>Counters</p>
                <p className='text-[#FFF] text-[15px]'>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4 className='text-[#FFF] text-[25px]'>Company</h4>
                <p className='text-[#FFF] text-[15px]'>Terms & Conditions </p>
                <p className='text-[#FFF] text-[15px]'>Privacy Policy</p>
                <p className='text-[#FFF] text-[15px]'>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4 className='text-[#FFF] text-[25px]'>Get in touch</h4>
                <p className='text-[#FFF] text-[15px]'>Crechterwoord K12 182 DK Alknjkcb</p>
                <p className='text-[#FFF] text-[15px]'>085-132567</p>
                <p className='text-[#FFF] text-[15px]'>info@payme.net</p>
            </div>
        </div>
    </div>
  )
}

export default Footer