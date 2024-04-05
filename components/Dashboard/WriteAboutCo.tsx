'use client'
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import ReactQuillBox from '@/components/Dashboard/ReactQuillBox';
import Upload from '../Write/Upload';



function WriteAboutCo() {
    const [value, setValue] = useState('');
    const [file, setFile] = useState<File | null>(null);


    const handelSubmite = () => {}

    
  return (
   
    <div className='container pb-12 '>
    <h1 className='text-4xl font-bold p-8 text-center'>درباره خود چیزی بنویسید<span className='underline '></span></h1>
  
  
  <div className='flex justify-center gap-10'>
        <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" >
        مشاهده متن
        </button>
        
       </div>
        <br />
        <br />
  
         {/* <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={formik.values} /> */}
         <form >
      
         
  
         
          <div className=' mb-8 bg-input-bg rounded p-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>
            <div className=' flex flex-row justify-between items-center gap-5'  >
             
            
                <div className='items-center justify-between gap-5 flex flex-col md:flex-row'>
                  {/* UPLOAD COMPONENT */}
                  <Upload setFile={setFile} /> 
                   {/* UPLOAD COMPONENT */}
  <div>
                  {file instanceof File && (
    <Image src={URL.createObjectURL(file)} alt='preview' className='h-40 w-40 object-cover rounded-lg' width={40} height={40}/>
  )}
  {typeof file === 'string' && <Image src={file} alt='preview' width={40} height={40}className='h-40 w-40 object-cover rounded-lg' />}</div>
  
  <div className='bg-red-400 px-3 py-2 rounded-md' onClick={()=>setFile(null)}> حذف</div>
                </div>
               
              
              
            </div>
  
          </div>
  
  <ReactQuillBox value={value} setValue={setValue} />
  <br/>
  <div className='text-center'>
  <button className='bg-green-500  text-white w-36  rounded-md px-4 py-5 hover:bg-green-700 transition ' type='submit'> ارسال</button>
  </div>
        </form>
      </div>
  )
}

export default WriteAboutCo