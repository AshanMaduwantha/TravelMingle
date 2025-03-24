import React from 'react'

const MailList = () => {
    return (
      <div className="w-full mt-12 bg-[#003580] text-white flex flex-col items-center gap-5 p-12">
        <h1 className="text-4xl font-semibold">Save time, save money!</h1>
        <span className="text-lg">Sign up and we'll send the best deals to you</span>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Your Email"
            className="w-72 h-8 p-2 mr-2 rounded-md border-none"
          />
          <button className="h-12 w-24 bg-[#0071c2] text-white font-semibold rounded-md cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    )
}

export default MailList
