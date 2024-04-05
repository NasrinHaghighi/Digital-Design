import React from 'react'
import photo from '../../public/img/fashion.png'
import Image from 'next/image'
function LandingAbout() {
  return (
    <div className="container lg:px-12 px-2 py-12 mt-6 mb-6 bg-input-bg rounded-lg shadow-md mx-auto">

        <h1 className='text-2xl text-center mb-5'>درباره ما</h1>
        <div className="grid grid-cols-12 lg:gap-8 lg:items-center gap-0 ">
        
          <div className="lg:col-span-4 col-span-12 order-1 lg:order-1 rounded-full overflow-hidden lg:w-72 lg:h-72 mx-auto w-64 h-64 mb-5 lg:mb-0 ">
          
            <Image src={photo} alt="Description" className="object-cover"     />
          </div>
          
         
          <div className="lg:col-span-8 col-span-12 order-1 lg:order-2">
          
            <p className="lg:text-lg text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
    </div>
  )
}

export default LandingAbout