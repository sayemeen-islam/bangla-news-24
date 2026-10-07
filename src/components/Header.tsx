import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';
import UserInfo from './UserInfo';


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
        <UserInfo></UserInfo>


      <NavLinks></NavLinks>
  
    </header>
  );
};

export default Header;