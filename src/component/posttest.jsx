import React from 'react'
import Navbar from './navbar';

const Posttest = () => {
  return (
    <section id='posttest'>
        <Navbar/>
            <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className='mx-auto max-w-7xl'>

                <div className='bg-[#E6E6E6] h-auto py-4'>
                    <div className='w-[95%] mx-auto font-[poppins] text-[24px]'>
                    MATERI PEMBELAJARAN KELAS 5 SD
                    </div>

                    {/* Post-Test */}
                    <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4'>
                        <div className=''>
                            <label className='font-[poppins] text-[20px]'>Matematika</label>
                        </div>

                        <div>
                            <label className='bg-gray-500 rounded-[5px] font-semibold p-[1px] font-sans ml-4'>Bangun Ruang</label>
                        </div>
                    </div>
                    
                    {/* Pre-Test */}
                    <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4'>
                        <div className=''>
                            <label className='font-[poppins] text-[20px]'>Matematika</label>
                        </div>

                        <div>
                            <label className='bg-gray-500 rounded-[5px] font-semibold p-[1px] font-sans ml-4'>Perkalian</label>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
    </section>
  )
}

export default Posttest;
