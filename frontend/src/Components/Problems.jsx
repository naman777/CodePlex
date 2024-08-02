import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Problems = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:7777/api/problems'); 
        setProblems(response.data);
 
      } catch (err) {
        setError(err);
        
      } 
    };

    fetchProblems();
  }, []);


  return (
    <div className='w-full overflow-auto px-14 py-8'>
      <div className='mb-8 text-center font-bold text-3xl'>Problems to Solve</div>
      <table className='w-full table-auto border-collapse px-4 py-4'>
        <thead className='bg-gray-800 text-white'>
          <tr>
            <th className='p-4 text-sm font-semibold tracking-wide text-left border-b border-gray-200'>Title</th>
            <th className='p-4 text-sm font-semibold tracking-wide text-left border-b border-gray-200'>Tags</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {problems.map(problem => (
            <tr key={problem.id} className='hover:bg-gray-100'>
              <Link to='/solve-problem' className='p-4 text-sm text-gray-700'>{problem.title}</Link>
              <td className='p-4 text-sm text-gray-700'>{problem.tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Problems;
