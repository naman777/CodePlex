import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Spinner } from '../component/Loader';

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('firstVisit')) {
      localStorage.setItem('firstVisit', 'true');
      window.location.reload();
    }
    const fetchProblems = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://codeplex.onrender.com/api/problems'); 
        setProblems(response.data);
        setIsLoading(false);
 
      } catch (err) {
        console.error('Error fetching problems', err);
      } 
    };

    fetchProblems();
  }, []);

  return (
    <div className='w-full h-screen overflow-auto px-14 py-8'>
      <div className='mb-8 text-center font-bold text-3xl text-white'>Problems to Solve</div>
      <table className='w-full table-auto border-collapse px-4 py-4 '>
        <thead className='bg-slate-600 text-white'>
          <tr>
            <th className='p-4 text-sm font-semibold tracking-wide text-left border-b border-gray-200 font-extrabold text-xl'>Title</th>
            <th className='p-4 text-sm font-semibold tracking-wide text-left border-b border-gray-200 font-extrabold text-xl'>Topics</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {problems.map(problem => (
            <tr key={problem.id} className='hover:bg-gray-100'>
              <div className='p-4 text-sm text-gray-700' onClick={()=>{
                navigate(`/solve-problem/${problem.id}`);
              }}>{problem.title}</div>
              <td className='p-4 text-sm text-gray-700' onClick={()=>{
                navigate(`/solve-problem/${problem.id}`);
              }}>{problem.tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Spinner />
    </div>)}
    </div>
  );
}
export default Problems;
