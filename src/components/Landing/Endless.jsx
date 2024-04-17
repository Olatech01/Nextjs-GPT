import React from 'react'

const Endless = () => {
  return (
    <div className=' bar-text flex justify-between sm:flex-col sm:gap-[20px] sm:w-full items-center w-[80%] px-[20px] py-[30px] rounded-lg'>
      <div className='flex flex-col gap-[20px]'>
        <p className='text-[12px] font-medium'>Request Early Access to Get Started</p>
        <h2 className='text-[24px] sm:text-[18px] font-extrabold'>Register today & start exploring the endless possiblities.</h2>
      </div>
      <div className='sm:w-full'>
        <button className='bg-[#000] text-[#FFF] sm:w-full font-bold text-[18px] px-[20px] py-[10px] rounded-xl'>Get Started</button>
      </div>
    </div>
  )
}

export default Endless