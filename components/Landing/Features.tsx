import React from 'react'
import Image from 'next/image'


import Link from 'next/link'
import RenderDangerous from './RenderDangerous'

/*GETDATA FUNC*/ 
const getData = async () => {
  const res=await fetch(`${process.env.NEXTAUTH_URL}/api/post`
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}
/* COMPONENT*/ 
async function Features() {
  const {lastPost} = await getData()
 
  return (
    <div className='container pt-12 pb-12 mt-10 mx-auto'>
       <h1 className='text-xl sm:text-2xl md:text-4xl font-black p-8 text-center'>{lastPost?.title}<span className='underline '></span></h1>
       <div className="flex flex-col lg:flex-row justify-around items-center gap-0 py-10">
       
       

        <div className="flex-1 md-order-1 mb-8 lg:mb-0">
            <Image width={400} height={400} src={lastPost?.img} alt='logo' className='object-cover rounded-md h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:animate-slide-in-right' />
        </div>
        <div className="flex-1 lg:text-xl md:text-lg text-md lg:animate-slide-in-left">  
        
         {/* <div className='text-center sm:text-right' dangerouslySetInnerHTML={{ __html: lastPost?.des.substring(0, 650) + '...' }} />  */}
        
    <RenderDangerous post={lastPost}/>
       
        <div className='text-sm flex justify-end items-center '>
          <Link href={lastPost?.slug} className='border-b-2 border-gray-500 hover:border-red-500 py-1 hover:text-red-500' >ادامه مطلب</Link>
        </div> 
        </div>
       </div>
    </div>
  )
}

export default Features