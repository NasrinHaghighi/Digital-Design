import React from 'react'
import Image from 'next/image'
import Banner from '../../public/img/culture.png'
import Link from 'next/link'


/*GETDATA FUNC*/ 
const getData = async () => {
  const res=await fetch(`http://localhost:3000/api/post`
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}
/* COMPONENT*/ 
async function Features() {
  const {lastPost} = await getData()
 
  return (
    <div className='container pt-12 pb-12 mt-10'>
       <h1 className='text-4xl font-black p-8 text-center'>{lastPost.title}<span className='underline '></span></h1>
       <div className="flex flex-col md:flex-row justify-around items-center gap-10 py-10">
       
       

        <div className="flex-1 md-order-1">
            <Image width={400} height={400} src={lastPost.img} alt='logo' className='object-cover rounded-md h-[400px] w-[400px]' />
        </div>
        <div className="flex-1 ">  
        
        <div dangerouslySetInnerHTML={{ __html: lastPost.des.substring(0, 650) + '...' }} />
        
    
       
       <div className='text-sm flex justify-end items-center '>
          <Link href={lastPost.slug} className='border-b-2 border-gray-500 hover:border-red-500 py-1 hover:text-red-500' >ادامه مطلب</Link>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Features