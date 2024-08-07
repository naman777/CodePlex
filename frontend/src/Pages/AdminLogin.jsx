import React, {useState} from 'react'

const AdminLogin = () => {
    const [AdminEmail, setAdminEmail] = useState('');
    const [AdminPassword, setAdminPassword] = useState('');

  return (
    <div className='flex flex-col min-h-screen justify-center items-center bg-gray-100'>
      <form className='w-full max-w-xl bg-white shadow-md rounded-lg p-8'>
        <div className='text-center text-3xl mb-3 font-sans font-bold'>LOGIN</div>
        <div className='mb-6 flex flex-col'>
          <input
            className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mb-4'
            placeholder='Email'
            onChange={(e)=>setAdminEmail(e.target.value)}
          />
          <input
            className='w-1/2 h-12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none mx-auto mb-4'
            placeholder='Password'
            type='password'
            onChange={(e)=>setAdminPassword(e.target.value)}
          />
          <div className='flex flex-col space-y-4'>
            <button
              type='submit'
              className='rounded-md bg-green-500 hover:bg-green-700 w-1/3 h-12 focus:outline-none mx-auto'
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin
