import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const name = "<>codeplex"

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='flex h-[50px] fixed w-full top-0 items-center border-b-2 border-solid bg-white z-50'>
      <div className='flex justify-between items-center w-full max-w-[1200px] mx-auto px-6'>
        <ul className='flex items-center gap-1 p-0'>
          <li>
            <Link to='/' className='hover:underline underline-offset-2 text-black mx-5'>
              {name}
            </Link>
          </li>
          <li className='relative' ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isOpen}
              className='hover:underline underline-offset-2 text-black'
            >
              Interview
            </button>
            {isOpen && (
              <div className='absolute bg-white shadow-lg rounded mt-2 right-0 w-48'>
                <Link
                  to='/online'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  Online Interview
                </Link>
                <Link
                  to='/assessment'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  Assessment
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to='/discuss' className='hover:underline underline-offset-2 text-black mx-5'>
              OA Discussion
            </Link>
          </li>
          <li>
            <Link to='/ide' className='hover:underline underline-offset-2 text-black mx-5'>
              IDE
            </Link>
          </li>
          <li>
            <Link to='/post' className='hover:underline underline-offset-2 text-black mx-5'>
              Post Question
            </Link>
          </li>
        </ul>
        <div className='flex items-center gap-4'>
          <Link to='/login' className='rounded-lg px-4 py-2 text-black'>
            Register
          </Link>
          <Link to='/admin' className='rounded-lg px-4 py-2 text-black'>
            Admin Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
