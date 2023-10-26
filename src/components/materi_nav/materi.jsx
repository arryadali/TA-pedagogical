import React from 'react'
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

const Materi = () => {
  return (
    <section id='materi'>
        <Navbar/>
        <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
          <div className='mx-auto max-w-7xl'>
              <p className='font-[serif] text-[40px]'>MATERI</p>

              <div className='bg-[#E6E6E6] h-auto py-4'>
                <div className='w-[95%] mx-auto font-[serif] text-[24px]'>
                  MATERI PEMBELAJARAN KELAS 5 SD
                </div>

                {/* Post-Test */}
                <Link to={"/page_materi_posttest"}>
                  <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                      <label className='font-[Georgia] font-medium text-white text-[20px] bg-gray-800 p-2 rounded-xl cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Post-Test</label>
                    </div>
                  </div>
                </Link>
                
                {/* Pre-Test */}
                <Link to={'/page_materi_pretest'}>
                  <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                      <label className='font-[Georgia] font-medium text-white text-[20px] bg-gray-800 p-2 rounded-xl cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Pre-Test</label>
                    </div>
                  </div>
                </Link>
                
              </div>
          </div>
        </div>  
    </section>
  )
}

export default Materi;
