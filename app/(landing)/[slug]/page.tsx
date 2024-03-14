import React from 'react'
import Image from 'next/image'
import Banner from '../../../public/img/culture.png'
import Sidebar from '@/components/Landing/Sidebar'
import Comments from '@/components/Landing/Comments'
/////
const getData = async ( slug : any) => {
  const res = await fetch(`http://localhost:3000/api/post/${slug}`
    , { cache: 'no-store' })

  if (!res.ok) throw new Error('fffffffffailed')

  return res.json()
}


///
 async function SinglePage({params}:any) {
  const {slug}=params
  const data = await getData( slug )
 
 
 //console.log('data, slug', data)
  return (
    <div>
      
         <div className="grid grid-flow-col justify-around items-center gap-10 py-10">
        <div className="col-span-4 sm:block hidden">
        <Image src={data?.img} alt='logo' width={200}  height={200} className='object-cover rounded-md h-[400px] w-[400px]' />
    </div> 
       <div className="col-span-8 ">  
       
       <h2 className='sm:text-5xl text-lg  font-bold py-8 text-center sm:text-rigth leading-relaxed'>{data?.title}</h2>

       <div className='text-center sm:text-right'><span>{data?.userName ? data?.userName : ''}   </span><span>{data?.createdAt.substring(0, 10)} </span></div>
           </div>
      </div>
      <div className="grid md:grid-flow-col grid-flow-row gap-8 p-4 mt-8">
   
   <div className="md:col-span-4 col-span-12 order-2 md:order-1 ">
    <Sidebar/>
   </div>
   <div className="md:col-span-8 col-span-12 order-1 md:order-2">
    <div className='leading-relaxed' dangerouslySetInnerHTML={{ __html: data?.des || '' }} />  
    <div>
      <Comments postSlug={data?.slug} />
    </div>
   </div> 
  </div>
  </div>
  )
}

export default SinglePage