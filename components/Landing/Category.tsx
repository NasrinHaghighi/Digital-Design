'use client'
import Link from 'next/link'
import React ,{useState, useEffect}from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const bgCat = (index:number) => {
  const colors = ['bg-light-blue', 'bg-light-purple', 'bg-light-pink', 'bg-light-green']; // Add more colors as needed
  return colors[index % colors.length];
}
const borderCat = (index:number) => {
  const colors = ['border-light-blue', 'border-light-purple', 'border-light-pink', 'border-light-green']; // Add more colors as needed
  return colors[index % colors.length];
}


function Category() {
  const [data, setData] = useState([]);

  const getCategory = async () => {
    const res = await fetch(`/api/categories`, { cache: 'no-store' });
    const data = await res.json();
    setData(data);
    if (!res.ok) throw new Error('Network response was not ok');
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="container pt-12 pb-12 mt-6 mb-6 bg-input-bg rounded-lg shadow-md mx-auto">
      <h1 className='text-2xl text-center mb-5'> دسته بندی ها</h1>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
    >
    
     
      
      {data.map((item: any, index) => {
        return <SwiperSlide key={index} className='mb-24   '>
           <div className='relative w-44 h-44 group mx-auto'>
 <div className={`absolute border-4  ${borderCat(index)} rounded-full w-full h-full `}></div>
   <div className="absolute w-14 h-56 left-20   bg-input-bg transition-all group-hover:animate-rotate-circle "></div>
   <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-4/5 h-4/5 ${bgCat(index)} rounded-full text-lg font-semibold`}>
    <Link href={`/blog?cat=${item.slug}`}>
    {item.title} 
    </Link>
  </div>
 </div>
        </SwiperSlide>
      })}
      
    </Swiper>

    </div>
  );
}




export default Category



// (
//   <div className='px-6'>
//                      <div className='relative w-44 h-44 group '>
//   <div className={`absolute border-4  ${borderCat(index)} rounded-full w-full h-full `}></div>
//   <div className="absolute w-14 h-56 left-20   bg-gray-200 transition-all group-hover:animate-rotate-circle "></div>
//   <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-4/5 h-4/5 ${bgCat(index)} rounded-full`}>
//   {item.title}
//   </div>
//   </div>
//   </div>  
//          )
       
         //  </Link>