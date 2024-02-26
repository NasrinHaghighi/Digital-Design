import React from 'react'

function Sidebar() {
  return (
    <>
    <h1 className='text-xl mb-5'>پر ببیننده ترین پستها</h1>
    <div className='flex flex-col gap-5 '>
        <span className=' text-md w-auto '>Food</span>
        <div className='text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit amet veritatis maxime, fuga facilis.</div>
        <div><span>Ali</span> <span>11-12-2023</span></div>
    </div>

    </>
  )
}

export default Sidebar