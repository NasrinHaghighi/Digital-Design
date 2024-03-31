
// import React , { useState ,useEffect ,useMemo} from 'react'
// import { useFormik } from "formik";
// import * as Yup from "yup";
//import ReactQuill from 'react-quill';

// import { CiCirclePlus } from "react-icons/ci";
// import Upload from '@/components/Write/Upload';
// import { useRouter } from 'next/navigation';
// import { useSession } from 'next-auth/react';

// import WriteModal from '@/components/Write/WriteModal';
//import ImageResize from 'quill-image-resize-module-react';
//import Quill from 'quill';
//import Image from 'next/image';
//import dynamic from "next/dynamic";
//const ReactQuill = typeof window !== 'undefined' ? dynamic(() => import('react-quill'), { ssr: false }) : null;
//import 'react-quill/dist/quill.snow.css';
//import ReactQuillBox from '@/components/Dashboard/ReactQuillBox';


import WritPageComponenet from "@/components/Dashboard/WritPageComponenet"
//Quill.register('modules/imageResize', ImageResize);


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
 
    
  return (
    <>
    <WritPageComponenet />
      </>

//     <div className='container pb-12 '>
//   <h1 className='text-4xl font-bold p-8 text-center'>ایجاد متن جدید<span className='underline '></span></h1>

// <form onSubmit={formik.handleSubmit}>
// <div className='flex justify-center gap-10'>
//       <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={() => setOpenModal(true)}>
//       مشاهده متن
//       </button>
//       <button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' onSubmit={handelSubmit}> ارسال</button>
//      </div>
//       <br />
//       <br />

//        <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={formik.values} />

    
//         <div className='mb-8'>
//           <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor">عنوان پست جدید</label>
//           <input
//             id="title"
//             name="title"
//             type="text"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عنوان" required
//             onChange={formik.handleChange}
//             value={formik.values.title}
//           />
//           {formik.touched.title && formik.errors.title ? (
//             <div className="input feedback text-rose-600">{formik.errors.title}</div>
//           ) : null}
//         </div>

//         <div className=' mb-8'>
//           <label htmlFor="category" className="block mb-2 text-sm font-medium text-textColor">دسته بندی</label>
//           <input
//             id="category"
//             name="category"
//             type="text"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="دسته بندی" required
//             onChange={formik.handleChange}
//             value={formik.values.category}
//           />
//           {formik.touched.category && formik.errors.category ? (
//             <div className="input feedback text-rose-600">{formik.errors.category}</div>
//           ) : null}

//         </div>
//         <div className=' mb-8'>
//           <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>
//           <div className=' flex felx-row justify-start items-center gap-5'  >
//             <div onClick={() => setOpen(!open)}><CiCirclePlus className='text-green-800 text-5xl font-extrabold' /></div>
//             {open &&
//               <div className='md:flex:row jutify-center items-center gap-5 flex-col'>
//                 {/* UPLOAD COMPONENT */}
//                 <Upload setFile={setFile} />
//                  {/* UPLOAD COMPONENT */}
// <div>
//                 {file instanceof File && (
//   <Image src={URL.createObjectURL(file)} alt='preview' className='h-40 w-40 object-cover rounded-lg' width={40} height={40}/>
// )}
// {typeof file === 'string' && <Image src={file} alt='preview' width={40} height={40}className='h-40 w-40 object-cover rounded-lg' />}</div>
//               </div>
//             }
//           </div>

//         </div>

// <ReactQuillBox value={value} setValue={setValue} />
     
//       </form>
//     </div>

  )

}

export default WritePage

  