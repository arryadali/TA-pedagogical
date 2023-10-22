import React from 'react'
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

const Soal = () => {
  return (
    <section id='soal'>
        <Navbar/>
        <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
          <div className='mx-auto max-w-7xl'>
              <p className='font-[serif] text-[40px]'>SOAL</p>

              <div className='bg-[#E6E6E6] h-auto py-4'>
                <div className='w-[95%] mx-auto font-[serif] text-[24px]'>
                  SOAL PEMBELAJARAN KELAS 5 SD
                </div>

                {/* Post-Test */}
                <Link to={"/posttest"}>
                  <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                      <label className='font-[Georgia] text-[20px] bg-red-500 p-2 rounded-xl cursor-pointer'>Post-Test</label>
                    </div>
                  </div>
                </Link>
                
                {/* Pre-Test */}
                <Link to={'/pretest'}>
                  <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                      <label className='font-[Georgia] text-[20px] bg-red-500 p-2 rounded-xl cursor-pointer'>Pre-Test</label>
                    </div>
                  </div>
                </Link>
                
              </div>
          </div>
        </div>  
    </section>
  )
}

export default Soal;
