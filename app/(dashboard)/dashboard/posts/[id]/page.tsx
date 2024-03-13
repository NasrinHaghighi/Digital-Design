'use client'
import React,{useState,useEffect} from 'react'
import { useParams } from 'next/navigation'
import Upload from '@/components/Write/Upload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import Quill from 'quill';
import WriteModal from '@/components/Write/WriteModal';

Quill.register('modules/imageResize', ImageResize);

interface Post {
    catSlug: string;
    createdAt: string;
    des: string;
    id: string;
    img: string;
    slug: string;
    title: string;
    userEmail: string;
    userName: string;
    views: number;
    category:string
  }
  interface UpdatedPost {
    slug:string,
        title:string,
        value:string | undefined,
        file:string | File | undefined,
        catSlug: string,
  }

function SiglePostDashboard() {
    const params = useParams();
    const { id } = params;
    const [openModal, setOpenModal] = useState(false);
    const [postData, setPostData] = useState<Post | null>(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [file, setFile] = useState<string | File | null>(null);
    const [content, setContent] = useState(postData?.des);
    const [updatedPost, setUpdatedPost] = useState<UpdatedPost | null>(null);
    useEffect(() => {
        if (postData) {
            setContent(postData.des);
            setCategory(postData.catSlug);
            setTitle(postData.title);
        }
    }, [postData]);
    // GET THE POST FROM API BY CHANGE THE URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/dashboard/post/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post data');
                }
                // console.log(response)
                const data = await response.json();
                setPostData(data); // Assuming your API returns post data in JSON format
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        };

        fetchData();
    }, [id]);
    useEffect(() => {
        if (openModal) {
            const updatePostForModal: UpdatedPost = {
                slug: slugify(title),
                title: title,
                value: content,
                file: file || postData?.img,
                catSlug: category
            };
            setUpdatedPost(updatePostForModal);
        }
    }, [openModal]);

    

    const slugify = (text: string) => {
        text= text.toLowerCase().trim().replace(/\s+/g, '-')
         return text;
       }
    // change the conetnet of reacr quill by on cahnge   
    const handelValue = (value:string) => {
        setContent(value);
    };
    const handleSubmit = async (e:any) => {
        e.preventDefault();
       const updatePost = {
        slug: slugify(title),
        title:title,
        des:content,
        img: file || postData?.img,
        catSlug: category,
       }
      
      // console.log('Updating post: ', updatePost);
    
        const response = await fetch(`http://localhost:3000/api/dashboard/post/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatePost)
        });
        if(!response.ok) {
            throw new Error('Failed to update post');
        }
      console.log('Post updated successfully!');
   
    }
// WHEN NEW DATA IS CREATED NOW WE NEED TO SEND TO THE API
    
    if (!postData) {
        return <div>Loading...</div>;
    }



    return (
        <div className='container pb-12 '>
            <h1 className='text-4xl font-bold p-8 text-center'> ویرایش متن<span className='underline '></span></h1>
            <div className='flex justify-center gap-10'>

            </div>
            <div className='flex justify-center gap-10'>
      <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={() => setOpenModal(true)}>
      مشاهده متن
      </button>
    
     </div>
            <br />
            <br />

           <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={updatedPost} /> 

            <form onSubmit={handleSubmit}>
                <div className='mb-8'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor">ویرایش عنوان پست</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عنوان" required
                         onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                    />

                </div>
                {/* category */}
                <div className='mb-8'>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-textColor">دسته بندی</label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="دسته بندی" required
                        onChange={(e)=>setCategory(e.target.value)}
                        value={category}
                    />
                    <br />
                    <br />
                    </div>
                    {/* cover image */}
                    <div className='mb-8'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>

                        <div className='bg-white rounded-md flex md:flex-row flex-col  justify-start items-center gap-5 border border-gray-200 p-4 border-spacing-1 border-1'  >
                             <div>
                           <span>تصویر قبلی</span>
                            <img src={postData?.img} alt={postData?.title} className='h-40 w-40 object-cover rounded-lg' /></div>

                            <div className=''> <Upload setFile={setFile} /> </div>
                            <div>مشاهده تصویر جدید:
                               
                             {file instanceof File && (
  <img src={URL.createObjectURL(file)} alt='preview' className='h-40 w-40 object-cover rounded-lg' />
)}
{typeof file === 'string' && <img src={file} alt='preview' className='h-40 w-40 object-cover rounded-lg' />}
                            </div>
                        </div>

                    
                    </div>
    {/* DESCRIPTION */}
    <ReactQuill theme="snow" value={content} onChange={handelValue} modules={modules} formats={formats}  bounds={'#root'} placeholder='****'/>
        <br />

        <button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' > ارسال</button>  

            </form>
        </div>

    )


}




export default SiglePostDashboard





const modules = {
    toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image', 'video'],
      ['clean'],
      // [{ 'color': ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'brown'] }, { 'background': [] }],          // dropdown with defaults from theme
     
      [{ 'align': [] }],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }
  }
  
  
  
  
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    "code-block", // Include "code-block" format here
    "bulleted-list",
    "numbered-list",
    "width" ,
    
  ];
    