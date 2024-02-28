'use client';
import React , { useState ,useEffect} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CiCirclePlus } from "react-icons/ci";
import Upload from '@/components/Write/Upload';
import { useRouter } from 'next/navigation';


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
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState('');
  const [file, setFile] = useState<File | null>(null );
  
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
    console.log(res)
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
    }, [value, file]);
  return (
    <form onSubmit={formik.handleSubmit}>
    <div className='container pt-12 pb-12 mt-10'>
    <h1 className='text-4xl font-bold p-8 text-center'>ایجاد متن جدید<span className='underline '></span></h1>

    <div className='mb-8'>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor">عنوان پست جدید</label>
          <input
            id="title"
            name="title"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="عنوان" required 
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
            <div onClick={()=>setOpen(!open)}><CiCirclePlus className='text-green-800 text-5xl font-extrabold'/></div>
            {open &&
            <div className=''>
              <Upload setFile={setFile} />
                     
           
           </div>
           }
            </div>
                    
          </div>
          
   <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />
   <br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6' type='submit'>submite</button>
    </div>
    </form>
  )
}

export default WritePage

const modules = {
  toolbar: [
    [{ color: ['red', 'blue', 'green', 'yellow', 'black'] }],
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ["link", "image"],
    ["clean"],


    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }]
    // this is rtl support
  ],
}



  const formats = ["header","bold","italic","underline","strike","blockquote",
    "list","bullet","indent","link","image","color","clean",
  ];