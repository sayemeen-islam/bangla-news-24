import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';


const Header = () => {
  const date=new Date().toLocaleDateString('bn-BD',{
    dateStyle: 'full'
  })
  return (
    <header className='px-4 py-4  max-w-7xl mx-auto '>
      <div className='relative flex justify-center items-center  gap-2 '>
        <Image src='/logo.webp' alt='Bangla News 24 Logo' width={40} height={40} className=''></Image>
        <div className='flex flex-col'>
          <span className='text-2xl font-bold text-red-700 '>Bangla News 24</span>
          <span className='text-xs text-neutral-500 '>{date}</span>
        </div>
      </div>
      <div className='sm:absolute sm:top-3 sm:right-10 flex justify-center items-center gap-4'>
        <button className=' py-4 hover:cursor-pointer text-sm hover:text-red-700'>সাইন ইন</button>
        <button className='btn btn-sm text-sm bg-red-700 hover:bg-red-800 text-white'>সাইন আপ</button>
      </div>
      <NavLinks></NavLinks>
  
    </header>
  );
};

export default Header;