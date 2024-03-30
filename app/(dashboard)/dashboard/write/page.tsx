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
//   const router = useRouter();
//   const session = useSession();
//   const role = session.data?.user.role;

//   useEffect(() => {
//     // if (role !== 'user') {
//     //   router.push('/')
//     // }
//   });

//   const [open, setOpen] = useState(true);
//   const [openModal, setOpenModal] = useState(false);
//   const [value, setValue] = useState('');
//   const [file, setFile] = useState<File | null>(null);



  
// const slugify = (text: string) => {
//  text= text.toLowerCase().trim().replace(/\s+/g, '-')
//   return text;
// }

//   const handelSubmit = async(values:any) => {
  
    
//       const res = await fetch('http://localhost:3000/api/post', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         slug: slugify(values.title),
//         title:values.title,
//         des:values.value,
//         img:values.file,
//         catSlug: values.category,
//       }),
//     })
//     //console.log('res', res)
//    // console.log('values', values)
//   }

  
//     const formik = useFormik({
//         initialValues: {
//           title: '',
//           category: '',
//           value: value,
//           file: file,
          
//         },
//         //validationSchema: SignupSchema,
//         onSubmit: values => {
//          // console.log('Submitting: ', values);
//           handelSubmit(values);
// router.push('/');
//         },
//       });
//       useEffect(() => {
//          formik.setValues({
//             ...formik.values,
//             value: value,
//             file: file
            
//         });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [value, file]);

    
  return (

    <div className='container pb-12 '>
  DDDDDDDDDD
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
  

  