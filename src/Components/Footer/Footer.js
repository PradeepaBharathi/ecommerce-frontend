import React from 'react';

function Footer() {
  return (
    <div className='h-80 w-full bg-amber-200 flex flex-col justify-center items-center '>
      <div className='mt-1'>
        <h1 className='text-6xl sm:text-7xl lg:text-5xl font-bold text-amber-900 leading-tight text-left italic tracking-wider font-serif'>
          Let's Shop
        </h1>
        <div className='flex flex-col space-y-1 mt-6 mb-2'>
        <span className='text-base text-amber-700 italic'>Discover a range of clothing and </span>
        <span className='text-base text-amber-700 italic'>accessories that redefine the trend </span>
        <span className='text-base text-amber-700 italic'>from sleek and tailored suits </span>
        </div>
      </div>
      <hr className='border-t-1  border-amber-400  w-full '/>
      <div className='mt-7'>
        <span className='text-amber-700 '>©️2024 Let's Shop. All rights are reserved</span>
      </div>
    </div>
  );
}

export default Footer;
