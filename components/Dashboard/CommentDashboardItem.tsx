'use client'
import { useRouter } from 'next/navigation';
import React,{useState, useEffect} from 'react'
import ShowReply from './ShowReply';
interface Comment {
    id: string;
    createdAt: string;
    des: string;
    postSlug: string;
    userEmail: string;
    userName: string;
  }
  interface Props {
    item: Comment;
  }
 
function CommentDashboardItem({ item }: Props) {
    const [openreply, setOpenreply] = useState(false);
    const [des, setDes] = useState('');
    const [replies, setReplies] = useState([]);

    const router = useRouter();
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
    const removeHandel = async (id: string) => {
        console.log(id);
        try {

            const res = await fetch(`http://localhost:3000/api/comments`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id})
            });

            if (!res.ok) {
                throw new Error('Failed to remove post');
            }
            router.push('/dashboard');
            // Handle successful response
            console.log('Post removed successfully');
        } catch (error) {
            // Handle error
            console.error('Error removing post:', error);
        }

    }


    const replyHandel = async (e: any) => {
        e.preventDefault();
        const { id: commentId } = item;

        console.log(des, commentId);
        try {
            await fetch('http://localhost:3000/api/replies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ des, commentId }),

            });
            setDes('');
            setOpenreply(false);
            fetchReplies(); // Clear the input
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    }

    useEffect(() => {
        fetchReplies();
  
    }, []);
    console.log('replies', replies)
    return (
        <div className='gird grid-cols-1 md:grid-cols-3 gap-5 mb-5'>
            <div className='bg-white p-5 rounded-lg shadow-md '>

                <div className='flex flex-col lg:flex-row justify-between text-sm mb-5 gap-y-3 '>
                    <div className='text-gary-500'>ایجاد شده در تاریخ: <span className='text-green-500 font-semibold'>{item?.createdAt.substring(0, 10)}</span>
                    </div>
                    <div>توسط: <span className='px-1 text-yellow-700 font-semibold'>{item?.userName}</span></div>

                </div>
                <div className='mb-5 md:text-2xl text-xl'>متن کامنت :<span className='px-1'></span><span>{item?.des}</span>
                </div>
                <div className='gap-5 flex flex-col justify-end pb-5'>
                    <div className='gap-5 flex justify-end'>
                        <button className='bg-red-500 px-3 py-1 rounded-md cursor-pointer' onClick={() => removeHandel(item?.id)}>حذف</button>
                        <button className='bg-green-500 px-3 py-1 rounded-md cursor-pointer' onClick={() => setOpenreply(!openreply)}>پاسخ</button>
                    </div>
                    {openreply &&
                        <div className={`bg-white p-5 rounded-lg shadow-md transition-opacity transition-max-h ease-in-out duration-500 ${openreply ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}>
                            <form onSubmit={replyHandel}>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-5" placeholder="پاسخ" onChange={(e) => setDes(e.target.value)} />
                                <button className='bg-blue-500 py-3 px-2 rounded-md' type='submit'>ثبت پاسخ</button>
                            </form>
                        </div>
                    }
                </div>

                <div className='border-t-2 border-gray-300 py-5'>
                 {replies?.map((reply: any) => (
                    <ShowReply key={reply.id} reply={reply} />
                ))}
                </div>
            </div>
        </div>
    )
}


export default CommentDashboardItem