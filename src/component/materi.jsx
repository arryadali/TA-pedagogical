import React from 'react'
import Navbar from './navbar';

const Materi = () => {
  return (
    <section id='materi'>
        <Navbar/>
        <div className='mx-auto max-w-7xl'>
            <p className='font-[poppins] text-[40px]'>MATERI</p>

            <div className='bg-green-500 h-auto py-4'>
              <div className='w-[95%] bg-red-500 mx-auto'>
                MATERI PEMBELAJARAN KELAS 5 SD
              </div>

              <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[5px] items-center my-4'>
                <div className=''>
                  <label className='font-[poppins] text-[20px]'>Matematika</label>
                </div>

                <div>
                  <label className='bg-gray-500 rounded-[5px] font-semibold p-[2px] font-sans'>Bangun Ruang</label>
                </div>
              </div>
            </div>

        </div>
    </section>
  )
}

export default Materi;
