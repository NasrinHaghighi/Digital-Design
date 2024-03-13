'use client'

import React from 'react'

import Image from 'next/image'

interface ModalProps{
    openModal:boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    values: any
    
}

const WriteModal:React.FC<ModalProps> =({openModal, setOpenModal, values}) =>{
console.log(values)

  return (
    <>
   
   {
    openModal && (
        <div id="modelConfirm" className="fixed z-50 inset-0 bg-gray-900 bg-opacity-95 overflow-y-auto h-full w-full flex justify-center pt-36">
           <div className=''>
      <div className="flex justify-center">
      <button className='bg-red-500 font-semibold p-5 rounded-md' onClick={()=>setOpenModal(false)}>بازگشت به نوشتن پست</button>
      </div>

            <br/>            
          
                <div className=' bg-white rounded-md  max-h-[80vh] overflow-y-auto p-5 m-5'>
                    <div className="grid grid-flow-col justify-around items-center w-l ">
                       
                        <div className="col-span-4 mb-10">
                            <Image src={values?.file} alt='logo' width={200} height={200} className='object-cover rounded-md h-[400px] w-[400px]' />
                        </div>
                        <div className="col-span-8 ">  
                             <h2 className='text-5xl font-bold py-8 text-rigth leading-relaxed'>{values?.title}</h2>
                       </div>
                        
                    </div>
                     <div className=" col-span-12 ">
   <div className='leading-relaxed p-4' dangerouslySetInnerHTML={{ __html: values?.value || '' }} />
   </div> 
                    
                </div>
          
            </div> 
        </div>
    )
} 
        
</>
  )
}

export default WriteModal

{/* <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md p-4">
                        <h1>Modal Content</h1>
                        <button onClick={() => setOpenModal(false)} className='bg-red-500'>Close</button>
                    </div> */}