'use client'
import React from 'react'

const handelRemove=()=>{
    window.history.replaceState(null, '', '/dashboard/posts')
    window.location.reload();
}

function RemoveFilters() {
  return (
    <button onClick={handelRemove} className='py-3 px-2 bg-red-400 rounded-md'>حذف فیلتر ها</button>
  )
}

export default RemoveFilters