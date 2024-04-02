'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link';


 function CatDropdown() {
 
    const [open, setOpen] = useState(false);
    //const data = await getData()
  
const [data, setData ] = useState([]);
  const fetchData=async () => {
    const res=await fetch(`/api/categories`, {cache: 'no-store'})

    if(!res.ok)  throw new Error('Network response was not ok')

    const data = await res.json();
    return setData(data)
  }


useEffect(()=>{
  fetchData()
},[])


    return (
        <div>
             <div className="dropdown inline-block relative ">
    <button onClick={()=>setOpen(!open)} className="bg-input-bg text-text-color font-semibold py-2 px-4 rounded inline-flex items-center">
      <span className="mr-1">دسته بندی</span>
      <span></span>
    </button>
    <ul className={`dropdown-menu absolute ${!open && 'hidden'} bg-input-bg text-text-color  w-52 p-2 rounded-md  shadow mt-2`}>
     {data?.map((item:any)=>{
       return(
      
        <li className="" key={item.id}>
          <Link className="rounded-md   hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" 
      href={`/dashboard/posts?cat=${item.slug}`} onClick={()=>setOpen(false)}>{item.title}</Link></li>
       )
     })}
     
    </ul>
  </div>
        </div>
    )
  
}

export default CatDropdown