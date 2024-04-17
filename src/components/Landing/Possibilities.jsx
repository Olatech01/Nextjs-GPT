import Image from 'next/image'
import React from 'react'

const Possibilities = () => {
  return (
    <div className='w-[80%] sm:w-full sm:p-[20px] flex justify-between items-center mt-[30px] sm:flex-col sm:gap-[30px]'>
        <div>
            <Image height={100} width={400} src={"/possibility.png"}/>
        </div>
        <div className="flex flex-col gap-[20px]">
            <h4 className='text-[#71E5FF] text-[20px] font-medium'>Request Early Access to Get Started</h4>
            <h1 className="gradient__text font-extrabold sm:font-normal text-[30px] sm:text-[25px]">The possibilities are <br /> beyond your imagination</h1>
            <p className='text-colorText text-[17px]'>Yet bed any for travelling assistance indulgence unpleasing. Not <br className='sm:hidden'/>  thoughts all exercise blessing. Indulgence way everything joy <br className='sm:hidden'/> alteration boisterous the attachment. Party we years to order <br className='sm:hidden'/> allow asked of.</p>
            <h4 className='text-subtext text-[20px] font-medium'>Request Early Access to Get Started</h4>
        </div>
    </div>
  )
}

export default Possibilities