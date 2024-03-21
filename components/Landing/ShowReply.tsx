import React from 'react'
import EditeReply from './EditeReply';



const getData = async (id: any) => {
    
    const res = await fetch(`http://localhost:3000/api/replies?commentId=${id}`, { cache: 'no-store' },);
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }
  
async function ShowReply({item}:any) {
    const {id} =item
    const data = await getData (id)


  return (
    <div>{
        data.map((item:any)=>{
return <div className='border-2 border-gray-300 p-3 rounded-md mr-8'>
    <div className='mb-3'> پاسخ نویسنده :<span className='text-orange-500 px-2 '>{item.userName}</span></div>
    <div>{item.des}</div>
    <EditeReply replyId={item.id} />
    
</div>
        })
        }</div>
  )
}

export default ShowReply