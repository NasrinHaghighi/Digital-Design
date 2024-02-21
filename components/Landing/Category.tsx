import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from '../../public/img/culture.png'


const getData = async () => {
  const res=await fetch("http://localhost:3000/api/categories" 
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}

 async function Category() {
  const data = await getData()
  console.log(data)
  return (
    <div className='container pt-12 pb-12 mt-6 mb-6' >
        <h1 className='text-xl'>آخرین پستها</h1>

        <div className="flex justify-around items-center gap-20 my-10">
          
          {data?.map((item:any)=>{
            return(
              <Link key={item._id} href='/' className='bg-slate-500 rounded-md p-4 flex justify-between  items-center w-36'>
                 <span>{item.title}</span>
                 <div className="rounded-full overflow-hidden  w-10 h-10 ">
                 <Image src={`/img/${item.img}`} width={35} height={35} alt='logo'/></div>
               </Link>
            )
          })}
              

              
        </div>
    </div>
  )
}

export default Category