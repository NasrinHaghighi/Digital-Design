import React from 'react'
import RemoveCategory from './RemoveCategory';

interface Category {
    id: string;
    slug: string;
    title: string;
    img: string;
    createdAt: string;
}

const getData = async (slug:string) => {
   
    const res = await fetch(`http://localhost:3000/api/post?cat=${slug}`, { cache: 'no-store' }, );
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }
async function CategoryItem({ item }: { item: Category }) {
    const {slug} = item;
    const data = await getData(slug);

    return (
        <div className='gird grid-cols-1 md:grid-cols-3 gap-5 mb-5'>
            <div className='bg-input-bg2 p-5 rounded-lg shadow-md first-line: '>
                <div className='text-gary-500 mb-3'>
                    ایجاد شده در تاریخ:
                    <span className='text-green-500 font-semibold'>
                        {item.createdAt ? item.createdAt.substring(0, 10) : ''}
                    </span>
                </div>
                <div className='mb-3'>
                    نام دسته بندی:
                    <span className='text-green-400 font-semibold text-lg'>
                        {item.title}
                    </span>
                </div>
                <div className='mb-3 flex justify-between items-center'>
                    <div>
                    <span> تعداد پست : </span>
                    <span className='text-blue-400 font-semibold text-lg'>{data.posts.length}</span>
                    </div>
                 <RemoveCategory slug={item.slug} />
               </div>
            </div>
        </div>
    )
}


export default CategoryItem