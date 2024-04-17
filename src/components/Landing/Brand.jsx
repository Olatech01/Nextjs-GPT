import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <div className='w-[60%] flex items-center justify-center sm:w-full sm:px-4 sm:gap-6'>
      <div className='flex items-center justify-evenly gap-6 w-full sm:grid sm:grid-cols-2'>
        <Image height={100} width={100} src={"/google.png"}/>
        <Image height={100} width={100} src={"/slack.png"}/>
        <Image height={100} width={100} src={"/atlassian.png"}/>
        <Image height={100} width={100} src={"/dropbox.png"}/>
        <Image height={100} width={100} src={"/shopify.png"}/>
      </div>
    </div>
  )
}

export default Brand