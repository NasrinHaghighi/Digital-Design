'use client'

import React,{useState} from 'react'
import { GrUploadOption } from "react-icons/gr";


function Upload({setFile}:any) {
    

    const handleFileChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('upload_preset', 'digitalblog');

            const data=await fetch('https://api.cloudinary.com/v1_1/dionw7l06/image/upload', {
                method: 'POST',
                body: formData
            }).then(res=>res.json())
           setFile(data.secure_url)
          }
      };

   
  return (
    <>
   
    <input type="file" id="file" name="value" accept="image/*"  onChange={handleFileChange} style={{ display: "none" }} />
    <label htmlFor="file" className=' flex items-center gap-5'>
        <span className='text-green-800'>تصویر مورد نظر را اضافه کنید:</span><GrUploadOption className='text-red-800 text-4xl font-extrabold'/>
    </label>

    </>
  )
}

export default Upload