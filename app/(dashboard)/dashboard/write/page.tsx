'use client';
import React , { useState ,useEffect ,useMemo} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
//import ReactQuill from 'react-quill';

import { CiCirclePlus } from "react-icons/ci";
import Upload from '@/components/Write/Upload';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import WriteModal from '@/components/Write/WriteModal';
import ImageResize from 'quill-image-resize-module-react';
import Quill from 'quill';
import Image from 'next/image';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
// Dynamically import the Quill editor component



Quill.register('modules/imageResize', ImageResize);


// const SignupSchema = Yup.object().shape({
//     title: Yup.string()
//       .min(10, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//   category: Yup.string()
//       .min(10, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//    description: Yup.string()
//   });





function WritePage() {
  const router = useRouter();
  const session = useSession();
  const role = session.data?.user.role;

  useEffect(() => {
    // if (role !== 'user') {
    //   router.push('/')
    // }
  });

  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState('');
  const [file, setFile] = useState<File | null>(null);



  
const slugify = (text: string) => {
 text= text.toLowerCase().trim().replace(/\s+/g, '-')
  return text;
}

  const handelSubmit = async(values:any) => {
  
    
      const res = await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug: slugify(values.title),
        title:values.title,
        des:values.value,
        img:values.file,
        catSlug: values.category,
      }),
    })
    //console.log('res', res)
   // console.log('values', values)
  }

  
    const formik = useFormik({
        initialValues: {
          title: '',
          category: '',
          value: value,
          file: file,
          
        },
        //validationSchema: SignupSchema,
        onSubmit: values => {
         // console.log('Submitting: ', values);
          handelSubmit(values);
router.push('/');
        },
      });
      useEffect(() => {
         formik.setValues({
            ...formik.values,
            value: value,
            file: file
            
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, file]);

    
  return (

    <div className='container pb-12 '>
      <h1 className='text-4xl font-bold p-8 text-center'>ایجاد متن جدید<span className='underline '></span></h1>

<form onSubmit={formik.handleSubmit}>
<div className='flex justify-center gap-10'>
      <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={() => setOpenModal(true)}>
      مشاهده متن
      </button>
      <button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' onSubmit={handelSubmit}> ارسال</button>
     </div>
      <br />
      <br />

       <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={formik.values} />

    
        <div className='mb-8'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor">عنوان پست جدید</label>
          <input
            id="title"
            name="title"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عنوان" required
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="input feedback text-rose-600">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className=' mb-8'>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-textColor">دسته بندی</label>
          <input
            id="category"
            name="category"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="دسته بندی" required
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className="input feedback text-rose-600">{formik.errors.category}</div>
          ) : null}

        </div>
        <div className=' mb-8'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>
          <div className=' flex felx-row justify-start items-center gap-5'  >
            <div onClick={() => setOpen(!open)}><CiCirclePlus className='text-green-800 text-5xl font-extrabold' /></div>
            {open &&
              <div className='md:flex:row jutify-center items-center gap-5 flex-col'>
                {/* UPLOAD COMPONENT */}
                <Upload setFile={setFile} />
                 {/* UPLOAD COMPONENT */}
<div>
                {file instanceof File && (
  <Image src={URL.createObjectURL(file)} alt='preview' className='h-40 w-40 object-cover rounded-lg' width={40} height={40}/>
)}
{typeof file === 'string' && <Image src={file} alt='preview' width={40} height={40}className='h-40 w-40 object-cover rounded-lg' />}</div>
              </div>
            }
          </div>

        </div>
      {/* {(typeof window !== 'undefined') ? 
        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats}  bounds={'#root'} placeholder='****' className='bg-white text-textColor'/>
        : <p>loading....</p>
    // Code that uses window
} */}
        <br />
        {/* <button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' onSubmit={handelSubmit}> ارسال</button> */}
      </form>
    </div>

  )

}

export default WritePage

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
   
    // [{ 'align': [] }],
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
  

  