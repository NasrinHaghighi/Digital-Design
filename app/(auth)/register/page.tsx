'use client';




import SigninbyGoogle from '../../../components/SigninbyGoogle/SigninbyGoogle';
import { useFormik } from "formik";

import * as Yup from "yup";
import Link from 'next/link';


//const passwordrole = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*/?&])[A-Za-z\d@$!%*?&]{8,}$/;



const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  
    email: Yup.string().email('Invalid email').required('Required'),
    password:Yup.string().min(5,'Too Short!').max(20,'Too Long!').required('Required'),
    // matches(passwordrole,  {message:'Please create a better password'})
    confirmPassword:Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Required'),
  });


const SignUpForm = () => {
  
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <div className="grid gap-6 mb-5 max-w-3xl mx-auto pt-10">
            <div className='text-center'>
                <Link href='/'>
                  Logo
                </Link>
                </div>
        <h1 className='text-4xl font-bold p-8 text-center '>ایجاد حساب کاربری </h1>
       <div className='mb-5'>
        <label htmlFor="first_name" className="block md-2 text-sm font-medium text-textColor">نام و نام خانوادگی</label>
          <input
            id="name"
            name="name"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="علی خلیلی" required 
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
                        <div className="input feedback">{formik.errors.name}</div>
                    ) : null}
          </div>

          <div className='mb-5'>
          <label htmlFor="email" className="block  text-sm font-medium text-textColor mb-2">ایمیل</label>
          <input
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required 
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
           {formik.touched.email && formik.errors.email ? (
                        <div className="input feedback">{formik.errors.email}</div>
                    ) : null}
          </div>

          <div className='mb-10'>
           <label htmlFor="password" className="block text-sm font-medium text-textColor mb-2 ">پسورد</label>
          <input
            id="password"
            name="password"
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required 
            onChange={formik.handleChange}
            value={formik.values.email}
          />
            {formik.touched.password && formik.errors.password ? (
                        <div className="input feedback">{formik.errors.password}</div>
                    ) : null}
          </div>
          <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md  w-1/2" type="submit">Submit</button>
          </div>
          <div className="flex justify-center items-center mt-4 mb-4">
  <hr className="w-1/4 border-gray400"></hr>
  <div className="mx-4 text-gray400 font-bold">or</div>
  <hr className="w-1/4 border-gray400"></hr>
</div>
            
            </div>
            <SigninbyGoogle/>
            </form>
   );
};

export default SignUpForm;