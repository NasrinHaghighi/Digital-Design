import React from 'react'
import Image from 'next/image'
import Banner from '../../../public/img/culture.png'
import Sidebar from '@/components/Landing/Sidebar'

function SinglePage() {
  return (
    <div>
        <div className="grid grid-flow-col justify-around items-center gap-10 py-10">
       
        <div className="col-span-4">
           <Image src={Banner} alt='logo' className='object-cover rounded-md h-[400px] w-[400px]' />
       </div>
       <div className="col-span-8 ">  
       
       <h2 className='text-5xl font-bold py-8 text-rigth'>تعریف واژه دیجیتال (Digital) </h2>
       <div><span>Ali</span> <span>11-12-2023</span></div>
           </div>
      </div>
      <div className="grid md:grid-flow-col grid-flow-row gap-8 p-4 mt-8">
   <div className="md:col-span-4 col-span-12 order-1 md:order-1 ">
    <Sidebar/>
   </div>
   <div className="md:col-span-8 col-span-12 order-2 md:order-2">
   <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facilis qui molestias aliquid harum, quam ut nihil perferendis fuga et adipisci optio voluptas magnam explicabo saepe praesentium? Nisi illum commodi labore deleniti est corporis, dolorum accusamus, maxime, ullam dolor quas doloribus! Debitis, aliquam voluptatum at itaque ipsam reprehenderit, est deleniti natus quisquam quos numquam. Assumenda, id molestias doloremque qui quisquam quasi laudantium cupiditate optio perferendis explicabo amet aperiam! Unde rem aperiam consectetur nam ullam velit, modi non, minima animi nostrum quisquam est porro temporibus maiores accusamus aut assumenda doloremque quod repellat. Cum distinctio eius voluptas officia, at maiores quas eligendi.</div>
   </div>
  </div>
    </div>
  )
}

export default SinglePage