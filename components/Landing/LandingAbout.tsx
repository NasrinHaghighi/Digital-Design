import React from 'react'
import photo from '../../public/img/fashion.png'
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
  const res=await fetch(`${process.env.NEXTAUTH_URL}/api/about`
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}
async function LandingAbout() {
  const data= await getData()
 
  return (
    <div className="container lg:px-12 px-2 py-12 mt-6 mb-6 bg-input-bg rounded-lg shadow-md mx-auto">

        <h1 className='text-2xl text-center mb-5'>درباره ما</h1>
        <div className="grid grid-cols-12 lg:gap-8 lg:items-center gap-0 ">
        
           <div className="lg:col-span-4 col-span-12 order-1 lg:order-1 rounded-full overflow-hidden lg:w-72 lg:h-72 mx-auto w-64 h-64 mb-5 lg:mb-0 "> 
          
            <Image src={data[0].img ? data[0].img :''} alt="Description" className='w-full h-full'  width={64}  height={64}  />
          </div> 
          
         
          <div className="lg:col-span-8 col-span-12 order-1 lg:order-2">
          
          <div className='leading-relaxed' dangerouslySetInnerHTML={{ __html: data[0].des.substring(0, 500) || '' }} />
          <div className=' py-9 text-left'><Link className='border-b-2 border-gray-500 hover:border-red-500  hover:text-red-500'
          href='/about'> ادامه مطلب...</Link></div>
          </div>
       
        </div>
    </div>
  )
}

export default LandingAbout