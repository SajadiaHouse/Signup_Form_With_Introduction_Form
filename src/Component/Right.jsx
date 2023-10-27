import { Form, Formik } from "formik";
import React from 'react'
import * as Yup from 'yup';
import { TextField } from './TextField';

function Right() {
  const validate = Yup.object().shape({
    firstname: Yup.string().max(15, 'First Name cannot be Empty').required('First Name cannot be empty!'),
    lastname: Yup.string().max(10, 'Last Name cannot be Empty').required('Last Name cannot be empty!'),
    email: Yup.string().email('Email cannot be Empty').required('Email cannot be empty!'),
    password: Yup.string().required('Password cannot be empty!')
  });
  // const onSubmit = async (values, actions) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   actions.resetForm();
  // };

  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
      validationSchema={validate}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      {({isSubmitting}) => (
        <Form>
            <div className="flex flex-col mt-12 md:me-[100px] p-5 md:p-8 ">
              <div className='bg-blue-800 rounded-lg p-3 text-center text-white'>
                <p><span className='font-bold'>Try it free for 7 days</span> then $20/mo. thereafter</p>
              </div>
              <div className='bg-white p-6 md:p-10 mt-4 rounded-lg'>
                <TextField
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                />
                <TextField
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                />
                <TextField
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <button disabled={isSubmitting} type="submit" className="w-full p-2.5 bg-green-700 text-white">
                  CLAIM YOUR FREE TRIAL
                </button>
                <p className="text-slate-500 text-sm text-center mt-2">By clicking the button, you are agreeing to our <span className="text-red-800 font-bold">Terms and Services</span></p>
              </div>
            </div>
        </Form>
      )}
    </Formik>
  );
}

export default Right;