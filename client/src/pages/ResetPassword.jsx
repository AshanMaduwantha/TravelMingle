import React from 'react'
import { assets } from '../assets/assets'

function ResetPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-300">
      <img src={assets.logo} alt="" className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer" />

    {/*enter email id*/}
    <form className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
      <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password</h1>
      <p className='text-center mb-6 text-indigo-300'>Enter your registered email address</p>
      <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
        <img src={assets.mail_icon} alt='' className='w-3 h-3'/>
        <input type='email' placeholder='Email' className='bg-transparent outline-none text-white'/>
      </div> 
    </form>

    </div>
  )
}

export default ResetPassword