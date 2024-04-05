import Link from 'next/link';
import React from 'react'
import NumberOfPostByCategory from './NumberOfPostByCategory';


const bgCat = (index:number) => {
    const colors = ['bg-light-blue', 'bg-light-purple', 'bg-light-pink', 'bg-light-green']; // Add more colors as needed
    return colors[index % colors.length];
  }

const getData = async () => {
    const res=await fetch(`${process.env.NEXTAUTH_URL}/api/categories`
    , {cache: 'no-store'})
    if(!res.ok)  throw new Error('Network response was not ok')
    return res.json()
  }

async function CategorySidebar() {

  const data = await getData()

  return (

    <>
      {data?.map((item: any, index: number) => (
        //
        <div className={`${bgCat(index)} rounded-md mb-5 max-w-80 px-4 py-2  hover:bg-gray-400 hover:text-textColor transition-all duration-500 text-textColor lg:mx-0 mx-auto`} key={item.id}>
          <Link href={`/blog?cat=${item.slug}`} className='flex justify-between'>
            <NumberOfPostByCategory item={item} />
            <span className="relative z-10">{item.title}</span>
          </Link>
          {/* <span
              className="absolute inset-0 rounded-md"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0)', transition: 'background-color 0.5s' }}
            /> */}
        </div>
        //
      ))}
    </>

  )
}

  
 

export default CategorySidebar