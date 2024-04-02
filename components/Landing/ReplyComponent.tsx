'use cleint'

import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';

function ReplyComponent({ item }: any) {
  //  console.log(item)
const router =useRouter()
    const [openReply, setOpenReply] = useState(false);
    const [reply, setReply] = useState('');


const handleSubmitReply = async (e:any) => {
        e.preventDefault();
   
      try {
      const res=  await fetch(`/api/replies`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            commentId: item.id,
            des: reply,
            postSlug:item.postSlug
          })
        });
    if(!res.ok){
        console.error('somethings went wrong'); 
    }
        setOpenReply(false);
        router.refresh()
      } catch (error) {
        console.error('Error posting reply:', error);
      }
    }


    return (
        <>
       
           <div className='py-5 px-5 border-t-2 border-gray-300 my-5'>
                 
               
                    <button className='bg-orange-500 px-5 py-2 rounded-md' onClick={()=> setOpenReply(!openReply)}>ثبت پاسخ نویسنده</button> 
            
             </div> 


            {openReply &&
                <div className={` p-5 rounded-lg shadow-md transition-opacity transition-max-h ease-in-out duration-500 ${openReply ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}>
                    <form onSubmit={ handleSubmitReply }>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-5"
                            placeholder="  پاسخ نویسنده" 
                            onChange={(e) => setReply(e.target.value)}
                        />
                        <button
                            className='bg-blue-500 py-3 px-2 rounded-md'
                           type='submit'
                        >
                            ثبت پاسخ
                        </button>
                    </form>
                </div>
            }
          
        </>
    );
}


export default ReplyComponent