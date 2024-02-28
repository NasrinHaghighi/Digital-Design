'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function Pagination({page,hasPrev, hasNext}:{page:number,hasPrev:boolean,hasNext:boolean}) {
    const router=useRouter()
    console.log('hasPrev', hasPrev);
    console.log('hasNext', hasNext);
  return (
   <>
   <div className='flex justify-between items-center gap-10 py-10'>
     
      <button className={` px-8 py-4 rounded-md ${!hasNext ? 'bg-iconDisable' : 'bg-icons'} `}
      onClick={() => router.push(`?page=${page + 1}`)}
      disabled={!hasNext}
      >بعدی</button>
      <button 
      className={` px-8 py-4 rounded-md ${!hasPrev ? 'bg-iconDisable' : 'bg-icons'}`}
       onClick={()=>router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
        
        >قبلی</button>
   </div>
   </>
  )
}

export default Pagination