import React from 'react'

const Search = () => {
  return (
      <div className='h-40 w-full flex flex-col md:flex-row items-center justify-center mx-auto text-center'>
          <div className='flex gap-4 '>
              <div className="flex flex-col border-2 px-3 py-2 rounded-xl">
                  <label htmlFor="Location">Select Location</label>
                  <select name="Location" className='px-4 py-2 bg-gray-300 outline-none rounded-lg' id="">
                  <option value="" className='rounded-lg'>New York</option>
                  <option value="" className='rounded-lg'>Los Vegas</option>
                  <option value="" className='rounded-lg'>Los Angles</option>
                  <option value="" className='rounded-lg'>Washington</option>
                  </select>
              </div>
             
              
              
             
          </div>
          <div></div>
    </div>
  )
}

export default Search