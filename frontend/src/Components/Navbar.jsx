import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex h-[50px] w-full top-0 items-center border-b-2 border-solid'>
      <div className='flex justify-between items-center w-full max-w-[1200px] mx-auto px-6'>
        <ul className='flex items-center gap-6 p-0'>
          <li><Link to='/problemset' className='hover:underline underline-offset-2 text-black mx-5'>CodeFlex</Link></li>
          <li><Link to='/problemset' className='hover:underline underline-offset-2 text-black mx-5'>Problems</Link></li>
          <li className='relative'>
            <button
              onClick={toggleDropdown}
              className='hover:underline underline-offset-2 text-black'
            >
              Interview
            </button>
            {isOpen && (
              <div className='absolute bg-white shadow-lg rounded mt-2'>
                <Link to='/online' className='block px-4 py-2 hover:bg-gray-200 mx-5'>
                  Online Interview
                </Link>
                <Link to='/assesment' className='block px-4 py-2 hover:bg-gray-200 mx-5'>
                  Assesment
                </Link>
              </div>
            )}
          </li>
          <li><Link to='/discuss' className='hover:underline underline-offset-2 text-black mx-5'>OA Discussion</Link></li>
          <li><Link to='/ide' className='hover:underline underline-offset-2 text-black mx-5'>IDE</Link></li>
          <li><Link to='post' className='hover:underline underline-offset-2 text-black mx-5'>Post Question</Link></li>
        </ul>
        <Link to='/register' className='rounded-lg px-4 py-2 text-black mx-5'>Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
