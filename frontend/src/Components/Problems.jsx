import React from 'react'

const Problems = () => {
  return (
    <div className='w-full overflow-auto px-14 py-8'>
      <div className='mb-8 text-center font-bold text-3xl'>Problems to Solve</div>
  <table className='w-full table-auto border-collapse px-4 py-4'>
    <thead className='bg-gray-800 text-white'>
      <tr>
        <th className='p-4 text-sm font-semibold tracking-wide text-left border-b border-gray-200'>Status</th>
        <th className='p-4 text-sm font-semibold tracking-wide text-left border-b border-gray-200'>Title</th>
        <th className='p-4 text-sm font-semibold tracking-wide text-left border-b border-gray-200'>Tags</th>
      </tr>
    </thead>
    <tbody className='bg-white divide-y divide-gray-200'>
      <tr className='hover:bg-gray-100'>
        <td className='p-4 text-sm text-gray-700'>Unsolved</td>
        <td className='p-4 text-sm text-gray-700'>Two Sum</td>
        <td className='p-4 text-sm text-gray-700'></td>
      </tr>
     </tbody>
  </table>
</div>

  )
}

export default Problems
