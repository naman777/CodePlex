import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex h-[50px] w-full fixed top-0 items-center border-b-2 border-solid bg-slate z-10'>
      <div className='m-auto h-[50px] w-full items-center justify-center px-6 md:flex max-w-[1200px]'>
        <ul className='flex items-start gap-6 p-0'>
          <Link to='/problemset' className='mx-5 hover:underline underline-offset-2 text-black'>CodeFlex</Link>
          <Link to='/problemset' className='mx-5 hover:underline underline-offset-2 text-black'>Problems</Link>
          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='mx-5 hover:underline underline-offset-2 text-black'
            >
              Interview
            </button>
            {isOpen && (
              <div className='absolute bg-white shadow-lg rounded mt-2'>
                <Link to='/online' className='block px-4 py-2 hover:bg-gray-200'>
                  Online Interview
                </Link>
                <Link to='/assesment' className='block px-4 py-2 hover:bg-gray-200'>
                  Assesment
                </Link>
              </div>
            )}
          </div>
          <Link to='/discuss' className='mx-5 hover:underline underline-offset-2 text-black'>OA Discussion</Link>
          <Link to='/ide' className='mx-5 hover:underline underline-offset-2 text-black'>IDE</Link>
        </ul>
      </div>
      <div>
        <Link to='/register' className='rounded-lg px-80 text-black'>Register</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
