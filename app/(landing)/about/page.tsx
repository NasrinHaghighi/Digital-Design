import Image from 'next/image'
import React from 'react'


const getData = async () => {
  const res=await fetch(`${process.env.NEXTAUTH_URL}/api/about`
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}
async function Aboutpage() {
const data= await getData()

  return (
    <>
    <div className='relative bg-bg '>
   <div className="grid grid-cols-2 grid-rows-1 gap-4 my-8 bg-input-bg  rounded-lg shadow-lg mx-auto relative  overflow-hidden ">
<div className='bg-teal-100 '>
 <Image src={data[0].img ? data[0].img :''} alt="Description" className='w-full h-full ' objectFit='cover' width={200} height={200} /> 
</div>
  <div>
    {/* Other content */}
  </div>
  <div className='absolute top-1/3 right-2/4  md:text-5xl text-l md:pt-12 '>
    <h1 className='md:text-3xl text-xl'>{data[0].title ? data[0].title :''}</h1>
    <h1>{data[0].subTitle ? data[0].subTitle :''}</h1>
  </div>
 
</div>
<div className='  w-full md:px-24 sm:px-12 px-6 bg-bg  rounded-md  aboslute z-0 -top-5'>
    <div className='bg-input-bg p-5 rounded-lg shadow-md '>
    <div className='leading-relaxed' dangerouslySetInnerHTML={{ __html: data[0].des ? data[0].des : '' }} />
    </div>

  </div>
  </div>
    </>
  )
}

export default Aboutpage

{/* <h1 className='text-4xl font-semibold absolute -right-24 inset-x-10 top-48'> طراح دیجیتال</h1> */}