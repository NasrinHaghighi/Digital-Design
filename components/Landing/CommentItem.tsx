'use client'

import React,{useEffect, useState} from 'react'
import { useSession } from "next-auth/react"  
import { useRouter } from 'next/navigation';
import ReplyComponent from './ReplyComponent';
import ShowReply from '../Dashboard/ShowReply';


function CommentItem({item}:any) {
  const { data: session, status } = useSession()

  const [openEdite, setOpenEdite] = useState(true);
  const [value, setValue] = useState('');


  const [replies, setReplies] = useState([]);

 const fetchReplies = async () => {
      try {
          const res = await fetch(`http://localhost:3000/api/replies?commentId=${item.id}`);
          if (!res.ok) {
              throw new Error('Failed to fetch replies');
          }
          const data = await res.json();
          setReplies(data);
      } catch (error) {
          console.error('Error fetching replies:', error);
      }
  };
  useEffect(() => {
    fetchReplies();

}, []);


const editeHandel = async () => {
   
try {
const res = await fetch('http://localhost:3000/api/comments', {
  method: 'PUT',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ id : item.id, value })
 
})

if (!res.ok) {
  throw new Error('Failed to edite comment');
}
    }catch (error) {}
}


  useEffect(() => {
    setValue(item.des);
    setOpenEdite(false);
    editeHandel()
  },[item.des])


/*by cahnge the value from input call api again*/
  useEffect(() => {
   editeHandel()
  },[value])

const canEdit = item.userEmail ===  session?.user.email  && item.userName === session?.user.name



  return (
    <div className="border-2 border-gray-200 rounded-md p-4 mb-5">
        <div className='text-gray-500 mb-3'><span >کاربر: </span><span className='text-green-500 font-semibold'>{item?.user?.name}</span>
        </div>
        <div className='flex justify-between'>
        <span className=''>{item?.des}</span>
        {canEdit && <button className='bg-green-500 px-3 py-2 rounded-md' onClick={()=>setOpenEdite(!openEdite)}>ویرایش</button>}
        
        </div>
         {/* {openEdite ? <div className='my-5'>
          <form onSubmit={editeHandel}>
          <input type="text" value={value}  className='text-red-500 px-2 w-full h-10 rounded-md border' onChange={(event)=>setValue(event.target.value)} />
          <button className='bg-blue-500 text-white px-5 py-2 rounded-md mt-5' type='submit'>ثبت</button>
          </form>
          </div>
          
          : '' }  */}

{/* {replies.length>0  ?
<div className='border-t-2 border-gray-300 py-5'>
                    <h1 className='text-xl font-bold mb-5'>پاسخ ها</h1>
                 { replies?.map((reply: any) => (
                    <ShowReply key={reply.id} reply={reply} />
                ))}
                </div> : ' ' } */}

                <br/>
{/* {  session?.user.role === 'admin' &&   <ReplyComponent item={item}  />} */}

       
    
    </div>
  )
}

export default CommentItem


{/* <span>پاسخ نویسنده :</span> */}


