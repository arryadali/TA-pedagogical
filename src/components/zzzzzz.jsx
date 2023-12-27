import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

const TabelHasil = () => {
  const [data, setData] = useState([]);
  const [uniqueUsernames, setUniqueUsernames] = useState(new Set());

  useEffect(() => {
    getServerData('http://localhost:5000/api/result', (res) => {
      console.log(res);
      setData(res);

      // Extract unique usernames
      const usernames = res.map((item) => item.username);
      setUniqueUsernames(new Set(usernames));
    });
  }, []);

  const filteredData = data.filter((v) => uniqueUsernames.has(v.username));

  return (
    <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
      <table className='m-auto'>
        <thead className='text-[16px] bg-[#1D809F] border-2'>
            <tr>
                <td className='border-solid border-2 px-12 border-black'>Name</td>
                <td className='border-solid border-2 px-5 border-black'>Total Attempts</td>
                <td className='border-solid border-2 px-5 border-black'>Total Post-Test</td>
            </tr>
        </thead>
        <tbody>
          {!filteredData.length ? (
            <tr>
              <td colSpan="3" className="text-center">
                Tidak ada data
              </td>
            </tr>
          ) : (
            filteredData.map((v, i) => (
              <tr className='table-body' key={i}>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.username || ''}</td>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.attempts || 0}</td>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.points || 0}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TabelHasil;
