'use client'
import React from 'react'

const handelRemove=()=>{
    window.history.replaceState(null, '', '/dashboard/posts')
    window.location.reload();
}

function RemoveFilters() {
  return (
    <div onClick={handelRemove}>حذف فیلتر ها</div>
  )
}

export default RemoveFilters