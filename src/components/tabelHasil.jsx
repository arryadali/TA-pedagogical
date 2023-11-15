import React from 'react'
import { useEffect } from 'react';
import { getServerData } from '../helper/helper';
import { useState } from 'react';

const TabelHasil = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getServerData('http://localhost:5000/api/result', (res) => {
      setData(res)
    })
  })

  return (
    <div style={{ overflowY: 'auto', maxHeight: '350px' }}>
      <table className='m-auto'>
        <thead className='text-[16px] bg-[#1D809F] border-2'>
          <tr>
            <td className='border-solid border-2 px-12 border-black'>Name</td>
            <td className='border-solid border-2 px-5 border-black'>Total Attempts : </td>
            <td className='border-solid border-2 px-5 border-black'>Total Earn Points : </td>
          </tr>
        </thead>

        <tbody>
          {!data ? <div>Tidak ada data</div> : 
            data.map((v, i) => (
              <tr className='table-body' key={i}>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.username || ''}</td>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.attempts || 0}</td>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.points || 0}</td>
              </tr>
            ))
          }      
        </tbody>
      </table>
    </div>
  )
}

export default TabelHasil;
