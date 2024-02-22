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

 async function Category() {
  const data = await getData()

  return (
    <div className='container pt-12 pb-12 mt-6 mb-6' >
        <h1 className='text-xl'>آخرین پستها</h1>

        <div className="flex justify-center items-center gap-20 my-10">
          
          {data?.map((item:any)=>{
            const CatBg = () => {

  
            }
            return(
              <Link key={item._id} href='/' className={`${bgCat(item.title)} rounded-md p-4 flex justify-center gap-4  items-center w-36`}>
                 <span>{item.title}</span>
                 <div className="rounded-full overflow-hidden  w-10 h-10 ">
                 <Image src={`/img/${item.img}`} width={40} height={40} alt='logo'/></div>
               </Link>
            )
          })}
              

              
        </div>
    </div>
  )
}

export default Category