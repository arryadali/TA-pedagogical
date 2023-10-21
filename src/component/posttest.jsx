import React from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Posttest = () => {
  return (
    <section id='posttest'>
        <Navbar/>
            <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='mx-auto max-w-7xl'>
                    <p className='font-[poppins] text-[40px]'>POST-TEST</p>

                    <div className='bg-[#E6E6E6] h-auto py-4'>
                        <div className='w-[95%] mx-auto font-[poppins] text-[24px]'>
                        MATERI PEMBELAJARAN KELAS 5 SD
                        </div>

                        {/* Bangun Ruang */}
                        <Link to={'/bangunruang'}>
                            <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4'>
                                <div className=''>
                                    <label className='font-[poppins] text-[20px]'>Matematika</label>
                                </div>

                                <div>
                                    <label className='bg-gray-500 rounded-[5px] font-semibold p-[1px] font-sans ml-4'>Bangun Ruang</label>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Posttest;
