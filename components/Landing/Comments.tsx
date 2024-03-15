'use client'
import { useSession } from "next-auth/react" 
import Link from "next/link"
import React, {useState, useEffect} from "react"
import CommentItem from "./CommentItem";
interface Props {
    createdAt: string;
    des: string;
    id: string;
    postSlug: string;
    user: {
        id: string;
        name: string;
        email: string;
        emailVerified: string | null;
        image: string | null;
        // Add other properties of the user if needed
    };
    userEmail: string;
    userName: string;
}

function Comments({postSlug}:any) {
 // console.log(postSlug);
    const { data: session } = useSession()
    const [des, setDes] = useState('')
    const [comments, setComments] = useState([])

const fetchData = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/comments?postSlug=${postSlug}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setComments(data);
         // Handle the response data as needed
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}


    const handelSubmit =async (event:any) => {
        event.preventDefault()
        try {
          await fetch('http://localhost:3000/api/comments', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ des, postSlug }),
          });
          setDes(''); // Clear the input
          fetchData(); // Fetch updated comments
      } catch (error) {
          console.error('Error submitting comment:', error);
      }
    }

    useEffect(() => {
     
        fetchData();
      }, []);
//console.log('comments',comments)
    
  return (
    <div className="my-10 max-w-full border-t-2 border-gray-300 py-5">
       {session ?
       <div>
        <h2 className="mb-5">ارسال نظر:</h2>
        <form onSubmit={handelSubmit}>
       <input type="text" placeholder="نظر بدهید..."  className='w-full h-10 rounded-md border-2 border-gray-300 outline-none' value={des} onChange={(event)=>(setDes(event.target.value))} />
       <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-md mt-5">ارسال</button>
       </form>
   </div>
       : <div>
        <span>لظفا برای ثبت نظر وارد شوید...</span>
        <Link href='/auth/signin'> ورود </Link>
       </div> } 

       <div>
        <h2 className="mt-5 mb-5">نظرات دوستان :</h2>
{comments?.map((item:Props, index:number)=>{
return <CommentItem key={index} {...item} />
})}
       </div>
    </div>
  )
}

export default Comments