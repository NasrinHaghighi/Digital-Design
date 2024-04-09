'use client'

import React ,{useMemo}from 'react'
//import ReactQuill from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import Quill from 'quill';

import dynamic from "next/dynamic";
//const ReactQuill = typeof window !== 'undefined' ? dynamic(() => import('react-quill'), { ssr: false }) : null;
import 'react-quill/dist/quill.snow.css';
Quill.register('modules/imageResize', ImageResize);



function ReactQuillBox({value, setValue}:any) {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
  return (
    <>
    {(typeof window !== 'undefined') ? 
    <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats}  bounds={'#root'} placeholder='****' className='bg-white text-textColor'/>
    : <p>loading....</p>

} 
</>
  )
}

export default ReactQuillBox


const modules = {
    toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike',],
      ['blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image', 'video'],
      ['clean'],
       [{ 'color': ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'brown'] }, { 'background': [] }],          // dropdown with defaults from theme
     
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
    ],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    },
    imageResize: {
     // parchment: Quill.import('parchment'),
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
    'color', 
    'align',
    'background',
    "code-block", // Include "code-block" format here
    "bulleted-list",
    "numbered-list",
    "width" ,
    
  ];
    
  