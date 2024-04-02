import Link from 'next/link'
import React from 'react'
import CategorySidebar from './CategorySidebar'

const getData = async () => {
  const res=await fetch(`${process.env.NEXTAUTH_URL}/api/post`
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}


async function Sidebar() {
  const {mostRecentPost} = await getData()
  //console.log('mostRecentPost'+JSON.stringify(mostRecentPost))
  return (
    <>
    <h1 className='text-2xl mb-5'>پر ببیننده ترین پستها</h1>
    {mostRecentPost?.map((item:any)=>{
return   <div className='flex flex-col gap-3 p-4 border-b-2 border-gray-200 mb-5 ' key={item.id}>
          <span className={`${bgCat(item.catSlug)} rounded-2xl w-14 p-2  flex justify-center  items-center `}>{item.catSlug}</span>
          <div className='text-md font-semibold text-wrap'>
            <Link href={`/${item.slug}`}>
            {item.title}
            </Link>
            </div>
            
          <div className='text-gray-500'><span className='text-green-500'>{item.userName ? item.userName : 'Ali'}</span> <span>{item.createdAt.substring(0,10)}</span></div>
  </div>
    })}
  <div className='text-center my-5'>
  <h1 className='text-2xl mb-5'>دسته بندی ها </h1>

  <CategorySidebar />

  </div>
    </>
  )
}

export default Sidebar

const bgCat=(title:string)=>{
  let bgColor;
  switch (title) {
      case 'food':
          bgColor = 'bg-light-blue';
          break;
      case 'travel':
          bgColor = 'bg-light-purple';
          break;
          case 'culture':
            bgColor = 'bg-light-pink';
            break;
            case 'fashion':
              bgColor = 'bg-light-green';
              break;
      // Add more cases as needed for different titles and colors
      default:
          bgColor = ''; // Default value if title doesn't match any case
  }
  return bgColor;
 }