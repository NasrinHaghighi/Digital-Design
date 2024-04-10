'use client'
import React,{useState, useEffect} from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import Quill from 'quill';
import WriteModal from '@/components/Write/WriteModal';

import Image from 'next/image';

Quill.register('modules/imageResize', ImageResize);
import Upload from '../Write/Upload';
import { useRouter } from 'next/navigation';
import ReactQuillBox from './ReactQuillBox';
import ModalAboutPage from './ModalAboutPage';

interface About {
  des: string;
  img: string ;
  id:string, 
  createdAt:string
}

function WriteAboutCo() {
  const [about, setAbout] = useState<About | undefined>(undefined);
   const [value, setValue] = useState <string | undefined>('');
   const [file, setFile] = useState<File | null>(null);
   const [values, setValues] = useState({value, file})
   const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

useEffect(() => {
setValues({value, file})
}, [openModal])

/*get abot from api*/
  const fetchabout = async () => {
    console.log('Fetching about data');
    try {
      const response = await fetch(`/api/about`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      setAbout(data[0])
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors appropriately (e.g., show error message to user)
    }
  }

  useEffect(() => {
    fetchabout()
   setFile(null)
  }, [])
  useEffect(() => {
   setValue(about?.des)
    //setFile(about?.img as unknown as File)
   
  }, [about])

/*get abot from api*/
  const handelValue = (content:string) => {
setValue(content)
  };

  /*for delete btn*/
   const handelChangeImage = () => {
    setFile(null)

 };

const handelEditAbout=(e:any)=>{
  e.preventDefault()
   const res=  fetch('/api/about', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id :'clumqokfx0001jgw9kg9zcp20', des:value, img:file })
  })
  res.then(res => {
    if (!res.ok) {
      throw new Error('Failed to edit about');
    }
    router.push('/dashboard');
    router.refresh()
    // Handle successful response
    console.log('About edited successfully');
  })
   .catch(error => {
      // Handle error
      console.error('Error editing about:', error);
    });
}
  return (

    <div className='container pb-12 '>
      <h1 className='text-4xl font-bold p-8 text-center'>درباره خود چیزی بنویسید<span className='underline '></span></h1>


      <div className='flex justify-center gap-10'>
        <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={() => setOpenModal(true)}>
          مشاهده متن
        </button>

      </div>
      <br />
      <br />

      <ModalAboutPage openModal={openModal} setOpenModal={setOpenModal} values={values}  handelValue={handelValue} />


      <form onSubmit={handelEditAbout}>


        <div className=' mb-8 bg-input-bg rounded p-4'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>
          <div className=' rounded-md flex md:flex-row flex-col  justify-start items-center gap-5 border border-gray-200 p-4 border-spacing-1 border-1'  >


            <div className='items-center justify-between gap-5 flex flex-col md:flex-row'>
            <div>
                           <span>تصویر قبلی</span>
                            <Image src={about?.img ? about?.img :''} alt='fromapi' className='h-40 w-40 object-cover rounded-lg' width={40} height={40}/></div>
              {/* UPLOAD COMPONENT */}
              <Upload setFile={setFile} />
              {/* UPLOAD COMPONENT */}
              <div>مشاهده تصویر جدید:
              {file instanceof File && (
  <Image src={URL.createObjectURL(file)} alt='preview' className='h-40 w-40 object-cover rounded-lg' />
)}            
    {typeof file === 'string' && <img src={file} alt='preview' className='h-40 w-40 object-cover rounded-lg' />}       
              
    
                              </div>

              <div className='bg-red-400 px-3 py-2 rounded-md' onClick={handelChangeImage}> حذف</div>
            </div>



          </div>

        </div>

        {/* DESCRIPTION */}
        {/* <ReactQuillBox value={value} setValue={setValue} />  */}

        <ReactQuill
          theme="snow"
          value={value}
          modules={modules}
          formats={formats}
          bounds={'#root'}
          placeholder='****'
          onChange={handelValue}
        />

        <br />
        <div className='text-center'>
          <button className='bg-green-500  text-white w-36  rounded-md px-4 py-5 hover:bg-green-700 transition ' type='submit' > ارسال</button>
        </div>
      </form>
    </div>
  )




}


export default WriteAboutCo

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



// const handelSubmite = async (e: any) => {
//   e.preventDefault();
//   const res = await fetch('/api/about', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       des: value,
//       img: file
//     })
//   })
//   router.push('/dashboard')
//   router.refresh()
// }