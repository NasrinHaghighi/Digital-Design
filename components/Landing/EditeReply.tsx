'use client'
import React ,{useState, useEffect}from 'react'
import { useRouter } from 'next/navigation';

function EditeReply({reply}:any) {
    const [openEdite, setOpenEdite] = useState(false);
    const [value, setValue] = useState('');
    const router = useRouter()
    const editeHandel = async () => {
   
        try {
        const res = await fetch(`/api/replies`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id : reply.id, value })
          
        })
        router.refresh()
      

        if (!res.ok) {
          throw new Error('Failed to edite reply');
        }
            }catch (error) {}
        }
        useEffect(() => {
          setValue(reply.des);
          setOpenEdite(false);
         
        },[reply.des])
      // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(() => {setValue(reply.des)},[])
  return (
    <>
    <div>
    <div className='text-left'>
        <button className='bg-green-500 px-5 py-2 rounded-md' onClick={()=>setOpenEdite(!openEdite)}>ویرایش پاسخ نویسنده</button>
    </div>
    </div>
     {openEdite ? <div className='my-5'>
     <form onSubmit={editeHandel}>
     <input type="text" value={value}  className='text-red-500 px-2 w-full h-10 rounded-md border' onChange={(event)=>setValue(event.target.value)} />
     <button className='bg-blue-500 text-white px-5 py-2 rounded-md mt-5' type='submit'>ثبت</button>
     </form>
     </div>
     
     : '' }  
     </>
  )
}

export default EditeReply 