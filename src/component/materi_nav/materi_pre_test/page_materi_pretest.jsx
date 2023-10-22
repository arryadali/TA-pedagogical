import React from 'react'
import Navbar from '../../navbar';
import { Link } from 'react-router-dom';

const Page_materi_pretest = () => {
  return (
    <section id='pretest'>
        <Navbar/>
            <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='mx-auto max-w-7xl'>
                    <p className='font-[serif] text-[40px]'>PRE-TEST</p>

                    <div className='bg-[#E6E6E6] h-auto py-4'>
                        <div className='w-[95%] mx-auto font-[serif] text-[24px]'>
                        MATERI PEMBELAJARAN KELAS 5 SD
                        </div>

                        {/* Materi */}
                        <Link to={'/materi_belajar_pretest'}>
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

export default Page_materi_pretest;
