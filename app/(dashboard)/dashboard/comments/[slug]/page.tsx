import CommentDashboardItem from '@/components/Dashboard/CommentDashboardItem';
import React from 'react'

const getData = async ({postSlug}:any) => {
    const res = await fetch(`http://localhost:3000/api/dashboard/comments/${postSlug}`, { cache: 'no-store' }, );
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }


async function CommentsBySlug({ params }: any) {
    const slug = params.slug;
    //console.log('slug from page /dash/comments/slug', slug);
const data=await getData({postSlug:slug})

    return (
      <>
      {data?.map((item:any)=>{
return <CommentDashboardItem key={item.id} item={item}/>
      })}
      </>
    )
}


export default CommentsBySlug