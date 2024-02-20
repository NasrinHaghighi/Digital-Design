'use client';



import Link from 'next/link';
import SigninbyGoogle from '../../../components/SigninbyGoogle/SigninbyGoogle';
import { useFormik } from "formik";
import { Formik } from 'formik';
import * as Yup from "yup";
import { useEffect } from 'react';


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
        <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-6 mb-10 max-w-3xl mx-auto pt-10">
       
       <div className='mb-10'>
        <label htmlFor="first_name" className="block mb- text-sm font-medium text-gray-900 dark:text-white">نام و نام خانوادگی</label>
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

          <div className='mb-10'>
          <label htmlFor="email" className="block  text-sm font-medium text-gray-900 dark:text-white">Email address</label>
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
           <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="علی خلیلی" required 
            onChange={formik.handleChange}
            value={formik.values.email}
          />
            {formik.touched.password && formik.errors.password ? (
                        <div className="input feedback">{formik.errors.password}</div>
                    ) : null}
          </div>
          <button type="submit">Submit</button>

            <SigninbyGoogle/>
            </div>
            </form>
   );
};

export default SignUpForm;