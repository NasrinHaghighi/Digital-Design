
import Link from 'next/link'
import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getData = async () => {
  const res=await fetch(`${process.env.NEXTAUTH_URL}/api/categories` 
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}


const bgCat = (index:number) => {
  const colors = ['bg-light-blue', 'bg-light-purple', 'bg-light-pink', 'bg-light-green']; // Add more colors as needed
  return colors[index % colors.length];
}
const borderCat = (index:number) => {
  const colors = ['border-light-blue', 'border-light-purple', 'border-light-pink', 'border-light-green']; // Add more colors as needed
  return colors[index % colors.length];
}
 async function Category() {

  const data = await getData()
 
  return (
    <div className='container pt-12 pb-12 mt-6 mb-6 ' >
        <h1 className='text-2xl mb-6 text-center'>دسته بندی ها</h1>

        <div className="  grid  grid-cols-5 bg-gray-200 py-14 px-8"> 
      
        {data?.map((item:any, index:number)=>{
                  return(
<div className='px-6'>
                   <div className='relative w-44 h-44 group '>
<div className={`absolute border-4  ${borderCat(index)} rounded-full w-full h-full `}></div>
<div className="absolute w-14 h-56 left-20   bg-gray-200 transition-all group-hover:animate-rotate-circle "></div>
<div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-4/5 h-4/5 ${bgCat(index)} rounded-full`}>
{item.title}
</div>
</div>
</div>  
       )
     })}

              

              
        </div>
    </div>
  )
}

export default Category



     {/* <div className="rounded-full overflow-hidden  w-10 h-10 ">
                 <Image src={`/img/${item.img}`} width={40} height={40} alt='logo'/></div> */}

//                  {data?.map((item:any, index:number)=>{
//                   return(

//                    <div className='relative w-44 h-44 group'>
// <div className={`absolute border-4  ${borderCat(index)} rounded-full w-full h-full `}></div>
// <div className="absolute w-14 h-56 left-20   bg-bg transition-all group-hover:animate-rotate-circle "></div>
// <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-4/5 h-4/5 ${bgCat(index)} rounded-full`}>
// {item.title}
// </div>
// </div>
        
//        )
//      })}

      // <Link key={item._id} href={`/blog?cat=${item.slug}`} className={`${bgCat(index)} rounded-md p-4 flex justify-center gap-4  items-center md:w-36 w-52 lg:w-52 m-auto mb-5`}>
           
       
         //  </Link>