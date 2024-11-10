import React from 'react'

const Newsletter = () => {
  return (
      <div className='h-[50vh]'>
          <div className='h-full flex flex-col items-center justify-center'>
              <h3 className='text-3xl md:text-4xl mb-10 text-center'>Don't miss out any new Updates from Resize</h3>
              <h3 className='text-xl sm:text-2xl text-gray-500 mb-4'>Subscrribe to our letter</h3>
              <div className='flex flex-row'>
                  <input type="text" className='flex-1 border px-3 py-2 outline-none' placeholder='enter your email'/>
                  <button className='border px-8 py-2 bg-black text-white outline-none'>Subscribe</button>
              </div>
          </div>
    </div>
  )
}

export default Newsletter