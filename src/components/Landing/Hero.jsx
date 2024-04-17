import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center sm:flex-col sm:px-[15px]'>
        <div className='ml-[5rem] flex flex-col gap-[15px] sm:ml-0 sm:px-2'>
            <h1 className="gradient__text font-extrabold sm:font-normal text-[62px] sm:text-[30px]">Let&apos;s Build Something <br className='sm:hidden'/> amazing with GPT-3 <br className='sm:hidden'/> OpenAI</h1>
            <p className='text-[#81AFDD] font-[20px]'>Yet bed any for travelling assistance indulgence unpleasing. <br className='sm:hidden'/> Not thoughts all exercise blessing. Indulgence way <br className='sm:hidden'/> everything joy alteration boisterous the attachment. Party <br className='sm:hidden'/> we years to order allow asked of.</p>
            <div className='flex flex-col gap-[10px]'>
                <input className='bg-[#031B34] min-h-[50px] outline-none text-dimWhite lg:w-[50%]  rounded-lg sm:w-full' type="text" />
                <button className='bg-[#FF4820] text-[#FFFF] rounded-lg min-h-[50px] lg:w-[50%] outline-none px-[20px] sm:w-full'>Get started</button>
            </div>
            <div className='flex items-center gap-2 sm:flex-col'>
                <Image height={100} width={100} src={"/people.png"}/>
                <p className='text-[#fff]'>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div>
            <Image height={300} width={500} src={"/ai.png"}/>
        </div>
    </div>
  )
}

export default Hero