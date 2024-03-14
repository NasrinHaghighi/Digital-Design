import React from 'react'

function CommentItem({...item}) {
  return (
    <div className="border-2 border-gray-200 rounded-md p-4 mb-5">
        <div className='text-gray-500 mb-3'><span >کاربر: </span><span className='text-green-500 font-semibold'>{item?.user?.name}</span></div>
        <div className=''>{item?.des}</div>

    </div>
  )
}

export default CommentItem