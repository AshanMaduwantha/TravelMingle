import React from 'react';
import { assets } from '../assets/assets';

function EmailVerify() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-300">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />

      {/* Form */}
      <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm">
        <h1 className="text-white text-2xl font-semibold mb-4 text-center">Email Verify OTP</h1>
        <p className="text-indigo-300 mb-6 text-center">Enter the 6-digit code sent to your email</p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-3 mb-6">
          {Array(6).fill(0).map((_, index) => (
            <input type="text" maxLength="1" key={index} required
              className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
            />
          ))}
        </div>
        <button className='w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full'>Verfity Email</button>
      </form>
    </div>
  );
}

export default EmailVerify;
