import { useField } from 'formik'
import React from 'react'

export const TextField = ({...props}) => {
  const [field, meta] = useField(props);
  return (
   <>
      <div class="relative">
      {meta.error && meta.touched? <div class="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
            <img src="./images/icon-error.svg" className='w-[15px] h-[15px]' alt="" />
        </div>:""}
        <input {...props} {...field}  className={meta.error && meta.touched? "input-error block w-full p-2.5 border border-red-800 text-red-800 rounded placeholder:text-black": "w-full p-2.5 border border-slate-400 text-black rounded placeholder:text-black"}  />
    </div>
   {meta.error&& meta.touched ? <div className='error text-red-700 italic text-sm text-right mb-4'>{meta.error}</div>:<div className='mb-7'></div>}
   </>
  )
}
