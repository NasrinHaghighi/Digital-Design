import React from 'react'
import Image from 'next/image'
import Banner from '../../public/img/culture.png'

function Features() {
  return (
    <div className='container pt-12 pb-12 mt-10'>
       <h1 className='text-4xl font-bold p-8 text-center'>تفاوت طراحی دیجیتال و طراحی گرافیک چیست؟<span className='underline '></span></h1>
       <div className="flex flex-col md:flex-row justify-around items-center gap-10 py-10">
       
       

        <div className="flex-1 md-order-1">
            <Image src={Banner} alt='logo' className='object-cover rounded-md h-[400px] w-[400px]' />
        </div>
        <div className="flex-1 ">  
        
        <h2 className='text-2xl font-bold p-8 text-rigth'>تعریف واژه دیجیتال (Digital) </h2>
        <p className=''>
        شاید تا همین جا هم تفاوت بین طراحی دیجیتال و طراحی گرافیک برایتان جا افتاده باشد. اما بیایید کمی دقیق‌تر در مورد آن صحبت کنیم. کلی‌ترین تفاوتی که می‌توان در مورد این دو شاخۀ طراحی گفت، این است که طراحی گرافیک، طراحی برای محصولات چاپی مثل مجله، پوستر، بَنِر، بروشور و … است. در مقابل، طراحی دیجیتال، طراحی برای محتوای دیجیتالی است که قرار است در دستگاه‌های دیجیتالی نمایش داده شود؛ مثل طراحی وب‌سایت، تجربۀ کاربری، رابط کاربری و … .</p>
        
        <button className='flex m-auto p-2 rounded-md bg-icons mt-10'
> ادامه مطلب</button>
        </div>
       </div>
    </div>
  )
}

export default Features