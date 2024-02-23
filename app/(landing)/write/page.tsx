'use client';
import React , { useState ,useEffect} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CiCirclePlus } from "react-icons/ci";
import Upload from '@/components/Write/Upload';


const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(10, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  category: Yup.string()
      .min(10, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
   description: Yup.string()
  });

function WritePage() {
  const [open, setOpen] = useState(true);


    const [value, setValue] = useState('');
    const [file, setFile] = useState<File | null>(null );
  

    const formik = useFormik({
        initialValues: {
          title: '',
          category: '',
          value: value,
          file: file,
          
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
          console.log(JSON.stringify(values, null, 2));
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
            <div onClick={()=>setOpen(!open)}><CiCirclePlus className='text-green-800 text-5xl font-extrabold'/></div>
            {open &&
            <div className=''>
              <Upload setFile={setFile} />
                  {/* <input type="file" id="file" name="img" accept="image/*"  onChange={handleFileChange} style={{ display: "none" }} />
                <label htmlFor="file" className=' flex items-center gap-5'>
                    <span className='text-green-800'>تصویر مورد نظر را اضافه کنید:</span><GrUploadOption className='text-red-800 text-4xl font-extrabold'/>
                </label> */}
            
            
              
           
           </div>
           }
            </div>
                    
          </div>
          
<ReactQuill theme="snow" value={value} onChange={setValue}   modules={modules} 
      formats={formats}/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6'>submite</button>
    </div>
    </form>
  )
}

export default WritePage

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }] // this is rtl support
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]