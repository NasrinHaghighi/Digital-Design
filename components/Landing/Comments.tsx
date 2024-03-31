import { Children } from "react";
import CommentItem from "./CommentItem"
import WriteComments from "./WriteComments"
import ReplyComponent from "./ReplyComponent";
import ShowReply from "./ShowReply";

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

const getData = async ({ postSlug}: { postSlug: string }) => {
  const res = await fetch(`http://localhost:3000/api/comments?postSlug=${postSlug}`, { cache: 'no-store' },);

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}



async function Comments({postSlug}:any) {


const data = await getData ({postSlug})
   
  return (
    <div className="my-10  border-t-2 border-gray-300 sm:mx-0 mx-3">
             <WriteComments postSlug={postSlug} />
       <br/>
       <br/>
       <div>
        <h2 className="mt-5 mb-5">نظرات دوستان :</h2>
       {data?.map((item:Props, index:number)=>{
        return <CommentItem key={index} item={item} >
           <ShowReply item={item}/> 
               </CommentItem>
        })} 
       </div>
    </div>
  )
}

export default Comments


// const fetchData = async () => {
//   try {
//       const res = await fetch(`http://localhost:3000/api/comments?postSlug=${postSlug}`);
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await res.json();
//       setComments(data);
//        // Handle the response data as needed
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
// }