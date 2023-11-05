import React from 'react'
import Navbar from '../../navbar';
import { Link } from 'react-router-dom';

const Page_soal_posttest = () => {
  return (
    <section id='posttest'>
        <Navbar/>
            <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='mx-auto max-w-7xl'>
                    <p className='font-[serif] text-[40px]'>POST-TEST</p>

                    <div className='bg-[#E6E6E6] h-auto py-4'>
                        <div className='w-[95%] mx-auto font-[serif] text-[24px]'>
                            <p>
                                SOAL PEMBELAJARAN KELAS 5 SD
                            </p>
                        </div>

                        {/* soal */}
                        <Link to={'/quiz_setup'}>
                            <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4'>
                                <div className=''>
                                    <label className='font-[Georgia] text-[20px] cursor-pointer'>Matematika</label>
                                </div>

                                <div>
                                    <label className='bg-gray-500 rounded-[5px] text-[16px] p-[2px] ml-4 font-[Georgia] cursor-pointer'>Perkalian dan Pembagian Pecahan</label>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Page_soal_posttest;
