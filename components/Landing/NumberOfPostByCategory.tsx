import React from 'react'



const getData = async ({slug}:any) => {
    const res=await fetch(`${process.env.NEXTAUTH_URL}/api/post?cat=${slug}`
    , {cache: 'no-store'})
    if(!res.ok)  throw new Error('Network response was not ok')
    return res.json()
  }

async function NumberOfPostByCategory({item}:any) {
    const {slug} = item
   
    const {posts} = await getData({slug})

  return (
    <div>{posts.length}</div>
  )
}

export default NumberOfPostByCategory