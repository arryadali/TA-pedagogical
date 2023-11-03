import React from 'react'

const TabelHasil = () => {
  return (
    <div>
      <table className='m-auto'>
        <thead className='text-[16px] bg-[#1D809F] border-2'>
            <tr>
                <td className='border-solid border-2 px-12 border-black'>Name</td>
                <td className='border-solid border-2 px-5 border-black'>Total Attemps : </td>
                <td className='border-solid border-2 px-5 border-black'>Total Earn Points : </td>
                <td className='border-solid border-2 px-5 border-black'>Result</td>
            </tr>
        </thead>

        <tbody>
            <tr className='table-body'>
                <td className='border-solid border-2 px-5 border-black text-center'>Daily Tuition</td>
                <td className='border-solid border-2 px-5 border-black text-center'>03</td>
                <td className='border-solid border-2 px-5 border-black text-center'>20</td>
                <td className='border-solid border-2 px-5 border-black text-center'>Passed</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TabelHasil;
