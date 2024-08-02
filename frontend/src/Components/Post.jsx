import React, { useState} from 'react';

const Post = () => {
  const [open, setOpen] = useState(false);

  const dropdown = () => {
    setOpen(!open);
  };


  return (
    <>
      <div className='text-center font-bold text-3xl mt-8'>Post a Question</div>
      <div className='flex flex-col items-center'>
        <div className='w-full max-w-xl bg-white shadow-md rounded-lg p-8'>
          <div className='mb-6'>
            <input
              className='w-full h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none'
              placeholder='Enter title of problem'
            />
          </div>
          <div className='mb-6'>
            <textarea
              className='w-full h-32 border border-gray-300 px-4 py-2 rounded-md focus:outline-none'
              placeholder='Enter description of problem'
              type='text'
            />
          </div>
          <div className='relative'>
            <button
              className='rounded-full border text-black px-4 py-2'
              onClick={dropdown}
            >
              +Tag
            </button>
            {open && (
              <div
              
                className='absolute bg-white shadow-lg rounded mt-2 w-48'
              >
                <ul className='block px-4 py-2 hover:bg-gray-200'>Array</ul>
                <ul className='block px-4 py-2 hover:bg-gray-200'>String</ul>
                <ul className='block px-4 py-2 hover:bg-gray-200'>Tree</ul>
                <ul className='block px-4 py-2 hover:bg-gray-200'>Graph</ul>
                <ul className='block px-4 py-2 hover:bg-gray-200'>Dynamic Programming</ul>
                <ul className='block px-4 py-2 hover:bg-gray-200'>Backtracking</ul>
                <ul className='block px-4 py-2 hover:bg-gray-200'>Bit Manipulation</ul>
                <ul className='block px-4 py-2 hover:bg-gray-200'>Linked List</ul>
              </div>
            )}
          </div>
          <div className='flex justify-end space-x-4 mt-4'>
            <button className='px-4 py-2 bg-red-500 text-black rounded-md'>
              Cancel
            </button>
            <button className='px-4 py-2 bg-green-500 text-white rounded-md'>
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
