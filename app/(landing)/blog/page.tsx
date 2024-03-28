import PostList from '@/components/Landing/PostList'
import Sidebar from '@/components/Landing/Sidebar'
import React from 'react'

async function Blogpage({params, searchParams}: any) {
  const page=parseInt(searchParams.page) || 1
  const cat =searchParams.cat || ''

  return (
    <div className=''>
       <div className='flex justify-center py-4 my-10 bg-red-500 rounded-md text-xl g-semibold'>{cat}</div>
        <div className="grid lg:grid-flow-col grid-flow-row gap-8 p-4 mt-8">
   <div className="lg:col-span-4 col-span-12 order-2 lg:order-1 text-center xs:text-rigth ">
    <Sidebar />
   </div>
   <div className="lg:col-span-8 col-span-12 order-1 lg:order-2">
 
    <PostList page={page} cat={cat} />
   </div>
  </div>
    </div>
  )
}

export default Blogpage