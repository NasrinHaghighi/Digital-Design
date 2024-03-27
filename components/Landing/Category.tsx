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


const bgCat = (index:number) => {
  const colors = ['bg-light-blue', 'bg-light-purple', 'bg-light-pink', 'bg-light-green']; // Add more colors as needed
  return colors[index % colors.length];
}

 async function Category() {
  const data = await getData()

  return (
    <div className='container pt-12 pb-12 mt-6 mb-6' >
        <h1 className='text-2xl mb-6'>دسته بندی ها</h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4 p-4">
          
          {data?.map((item:any, index:number)=>{
                       return(
              <Link key={item._id} href={`/blog?cat=${item.slug}`} className={`${bgCat(index)} rounded-md p-4 flex justify-center gap-4  items-center md:w-36 w-52 lg:w-52 m-auto mb-5`}>
                 <span>{item.title}</span>
                 {/* <div className="rounded-full overflow-hidden  w-10 h-10 ">
                 <Image src={`/img/${item.img}`} width={40} height={40} alt='logo'/></div> */}
               </Link>
            )
          })}
              

              
        </div>
    </div>
  )
}

export default Category