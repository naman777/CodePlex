import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const CreateAcc = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <div>
    <form className='flex flex-row min-h-screen justify-center items-center'>
        <div className='w-full max-w-xl bg-white shadow-md rounded-lg p-8'>
        <div className='text-center text-3xl mb-3 font-sans font-bold'>CREATE YOUR ACCOUNT</div>
        <div className='text-sm text-center font-semibold'>Login <Link to='/login' className='text-blue-500'>now</Link> !</div>
        <div className='mb-6 flex flex-col *:items-center'>
            <input
              className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mt-8'
              placeholder='Name'
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mt-8'
              placeholder='Email'
              type='text'
              onChange={(e)=>setEmail(e.target.value)}
            />
             <input
              className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mt-8'
              placeholder='Password'
              type='password'
              onChange={(e)=>setPassword(e.target.value)}
            />
             <input
              className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mt-8'
              placeholder='Confirm Password'
              type='password'
              onChange={(e)=>setConfirm(e.target.value)}
            />
            <br/>
            <button className='rounded-md bg-green-500 hover:bg-green-700 w-1/3 h-12 focus:outline-none mx-auto mt-3'>Submit</button>
            </div>

        </div>
        
      </form>
    </div>
    
  )
}

export default CreateAcc
