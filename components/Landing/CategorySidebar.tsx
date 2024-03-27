import React from 'react'


const bgCat = (index:number) => {
    const colors = ['bg-light-blue', 'bg-light-purple', 'bg-light-pink', 'bg-light-green']; // Add more colors as needed
    return colors[index % colors.length];
  }
const getData = async () => {
    const res=await fetch(`http://localhost:3000/api/categories`
    , {cache: 'no-store'})
    if(!res.ok)  throw new Error('Network response was not ok')
    return res.json()
  }

async function CategorySidebar() {

    const data= await getData()

  return (
   
    <div className="masonry sm:masonry-sm md:masonry-md">
      {data?.map((item: any, index:number) => (
      
          <p className={`${bgCat(index)} rounded-md p-4 mb-3 text-center`}>{item.title}</p>
      
      ))}
    </div>

  )
}

export default CategorySidebar