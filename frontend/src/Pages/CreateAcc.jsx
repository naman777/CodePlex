import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAcc = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const sendInfo = async (e) => {
    e.preventDefault(); 
    try {

      const response = await axios.post('https://codeplex.onrender.com/api/user/signup', {
        name,
        email,
        password,
      });

      console.log(response.data);

      console.log(response.status === 201);
      
      if (response.status === 201) {
        navigate('/login');
        console.log(error)
      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        setError(error.response.data.msg);
        console.log(error)
      } else {
        setError('An error occurred. Please try again.');
        console.log(error)
      }
    }
  };

  return (
    <div>
      <form
        className='flex flex-row min-h-screen justify-center items-center'
        onSubmit={sendInfo}
      >
        <div className='w-full max-w-xl bg-white shadow-md rounded-lg p-8'>
          <div className='text-center text-3xl mb-3 font-sans font-bold'>
            CREATE YOUR ACCOUNT
          </div>
          <div className='text-sm text-center font-semibold'>
            Login <Link to='/login' className='text-blue-500'>now</Link>!
          </div>
          {error && <div className='text-red-500 text-center mt-4'>{error}
          </div>}
          <div className='mb-6 flex flex-col items-center'>
            <input
              className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mt-8'
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mt-8'
              placeholder='Email'
              type='email' 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mt-8'
              placeholder='Password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button
              className='rounded-md bg-green-500 hover:bg-green-700 w-1/3 h-12 focus:outline-none mx-auto mt-3'
              type='submit'
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAcc;
