import PostList from '@/components/Landing/PostList'
import Sidebar from '@/components/Landing/Sidebar'
import React from 'react'

async function Blogpage({params, searchParams}: any) {
  const page=parseInt(searchParams.page) || 1
  const cat =searchParams.cat || ''

  return (
    <div className=''>
       <div className='flex justify-center py-4 my-10 bg-red-500 rounded-md text-xl font-semibold'>{cat}</div>
        <div className="grid md:grid-flow-col grid-flow-row gap-8 p-4 mt-8">
   <div className="md:col-span-4 col-span-12 order-2 md:order-1 text-center xs:text-rigth ">
    <Sidebar />
   </div>
   <div className="md:col-span-8 col-span-12 order-1 md:order-2">
 
    <PostList page={page} cat={cat} />
   </div>
  </div>
    </div>
  )
}

export default Blogpage