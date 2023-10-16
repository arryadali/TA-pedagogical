import React from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Materi = () => {
  return (
    <section id='materi'>
        <Navbar/>
        <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
          <div className='mx-auto max-w-7xl'>
              <p className='font-[poppins] text-[40px]'>MATERI</p>

              <div className='bg-[#E6E6E6] h-auto py-4'>
                <div className='w-[95%] mx-auto font-[poppins] text-[24px]'>
                  MATERI PEMBELAJARAN KELAS 5 SD
                </div>

                {/* Post-Test */}
                <Link to={"/posttest"}>
                  <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4'>
                    <div className=''>
                      <label className='font-[poppins] text-[20px]'>Post-Test</label>
                    </div>
                  </div>
                </Link>
                
                {/* Pre-Test */}
                <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4'>
                  <div className=''>
                    <label className='font-[poppins] text-[20px]'>Pre-Test</label>
                  </div>
                </div>
                
              </div>
          </div>
        </div>
    </section>
  )
}

export default Materi;
