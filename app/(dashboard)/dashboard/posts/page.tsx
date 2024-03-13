import DashboardPostitem from '@/components/Dashboard/DashboardPostitem'
import Filters from '@/components/Dashboard/Filters/Filters'
import next from 'next'
import Link from 'next/link'
import React from 'react'

const getData = async ({ sort, page ,cat,search}: { sort: string, page: number,cat:string,search:string }) => {
  const res = await fetch(`http://localhost:3000/api/post?&search=${search}&sort=${sort}&page=${page}&cat=${cat}`, { cache: 'no-store' }, );

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}


async function dashboardPostpage({searchParams}:any) {
  const page = parseInt(searchParams.page) || 1;
  const sort =searchParams.sort || ''
  const cat =searchParams.cat || ''
  const search =searchParams.search || ''
  //console.log(page,'searchParams', searchParams)
const { posts, count } = await getData({ sort, page, cat, search });


console.log(posts.length)
  return (
    <>
    <Filters sort={sort} page={page} cat={cat} search={search}/>
    
   {posts.map((post:any)=>{
return <DashboardPostitem key={post.id} post={post}/>
})} 
</>

   
  )
}

export default dashboardPostpage


  // let posts = [];
  // if (sort === 'newest') {
  //   const { mostRecentPost } = await getData({ sort, page,cat,search });
  //   posts = mostRecentPost;
  // } else if (sort === 'oldest') {
  //   const { mostOldPosts } = await getData({ sort, page, cat, search });
  //   posts = mostOldPosts;
  // } else {
  //   const { posts: regularPosts } = await getData({ sort, page, cat,search });
  //   posts = regularPosts;
  // }