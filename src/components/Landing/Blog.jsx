import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className='flex flex-col w-[80%] sm:w-full p-[20px] gap-[20px]'>
        <div>
            <h1 className="gradient__text font-extrabold sm:font-normal text-[52px] sm:text-[30px]">A lot is happening, <br className='sm:hidden'/> We are blogging about it.</h1>
        </div>
        <div className='flex gap-[20px] sm:flex-col'>
            <div>
                <Image height={100} width={300} src={"/blog01.png"} className='sm:w-full'/>
                <div className='bg-[#042C54] flex flex-col gap-[20px] p-[20px] min-h-[60vh] sm:min-h-0'>
                    <p className='text-[12px] font-medium text-[#FFF]'>Sep 26, 2021</p>
                    <p className='text-[20px] font-medium text-[#FFF]'>GPT-3 and Open  AI is the <br className='sm:hidden'/> future. Let us exlore how it <br className='sm:hidden'/> is?</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-[20px] sm:grid-cols-1'>
                <div>
                    <Image height={100} width={300} src={"/blog02.png"} className='sm:w-full'/>
                    <div className='bg-[#042C54] flex flex-col gap-[20px] p-[20px]'>
                        <p className='text-[12px] font-medium text-[#FFF]'>Sep 26, 2021</p>
                        <p className='text-[20px] font-medium text-[#FFF]'>GPT-3 and Open  AI is the <br className='sm:hidden'/> future. Let us exlore how it <br className='sm:hidden'/> is?</p>
                    </div>
                </div>
                <div>
                    <Image height={100} width={300} src={"/blog03.png"} className='sm:w-full'/>
                    <div className='bg-[#042C54] flex flex-col gap-[20px] p-[20px]'>
                        <p className='text-[12px] font-medium text-[#FFF]'>Sep 26, 2021</p>
                        <p className='text-[20px] font-medium text-[#FFF]'>GPT-3 and Open  AI is the <br className='sm:hidden'/> future. Let us exlore how it <br className='sm:hidden'/> is?</p>
                    </div>
                </div>
                <div>
                    <Image height={100} width={300} src={"/blog04.png"} className='sm:w-full'/>
                    <div className='bg-[#042C54] flex flex-col gap-[20px] p-[20px]'>
                        <p className='text-[12px] font-medium text-[#FFF]'>Sep 26, 2021</p>
                        <p className='text-[20px] font-medium text-[#FFF]'>GPT-3 and Open  AI is the <br className='sm:hidden'/> future. Let us exlore how it <br className='sm:hidden'/> is?</p>
                    </div>
                </div>
                <div>
                    <Image height={100} width={300} src={"/blog05.png"} className='sm:w-full'/>
                    <div className='bg-[#042C54] flex flex-col gap-[20px] p-[20px]'>
                        <p className='text-[12px] font-medium text-[#FFF]'>Sep 26, 2021</p>
                        <p className='text-[20px] font-medium text-[#FFF]'>GPT-3 and Open  AI is the <br className='sm:hidden'/> future. Let us exlore how it <br className='sm:hidden'/> is?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog