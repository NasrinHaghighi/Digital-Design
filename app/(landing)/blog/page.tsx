import PostList from '@/components/Landing/PostList'
import Sidebar from '@/components/Landing/Sidebar'
import React from 'react'

function Blogpage({params, searchParams}: any) {
    //console.log(searchParams)
  return (
    <div>
       
        <div className='flex justify-center py-4 my-10 bg-red-500 rounded-md text-xl font-semibold'>{searchParams.cat}</div>
        <div className="grid md:grid-flow-col grid-flow-row gap-8 p-4 mt-8">
   <div className="md:col-span-4 col-span-12 order-1 md:order-1 ">
    <Sidebar />
   </div>
   <div className="md:col-span-8 col-span-12 order-2 md:order-2">
    <PostList category={searchParams.cat} />
   </div>
  </div>
    </div>
  )
}

export default Blogpage