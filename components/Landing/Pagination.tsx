'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function Pagination({page,hasPrev, hasNext, cat}:{page:number,hasPrev:boolean,hasNext:boolean, cat:string}) {
    const router=useRouter()
   
  return (
   <>
   <div className='flex justify-between items-center gap-10 py-10'>
     
      <button className={` px-8 py-4 rounded-md ${!hasNext ? 'bg-iconDisable' : 'bg-icons'} `}
      onClick={() => router.push(`?page=${page + 1}&cat=${cat}`)}
      disabled={!hasNext}
      >بعدی</button>
      <button 
      className={` px-8 py-4 rounded-md ${!hasPrev ? 'bg-iconDisable' : 'bg-icons'}`}
       onClick={()=>router.push(`?page=${page - 1}&cat=${cat}`)}
        disabled={!hasPrev}
        
        >قبلی</button>
   </div>
   </>
  )
}

export default Pagination