import React, {useState} from 'react'
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

const Soal = () => {
  const [showText, setShowText] = useState(false);

  const handleMulaiClick = () => {
    setShowText(true)

    // Set timeout untuk menyembunyikan teks setelah 5 detik
    setTimeout(() => {
      setShowText(false);
    }, 5000); // 5000 milidetik = 5 detik
  }
  
  return (
    <section id='soal'>
        <Navbar/>

        <p className='font-[serif] text-[40px]'>SOAL</p>

        <div className='grid grid-cols-2 gap-10 w-[82%] m-auto'>
            <div className=''>

              {/* KELAS KONTROL */}
              <div className=''>
                <p>KELAS KONTROL</p>

                <Link to={"/page_soal_posttest"}>
                  <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                    <label className='font-[Georgia] font-medium text-white text-[20px] bg-gray-800 p-2 rounded-xl cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Post-Test</label>
                    </div>
                  </div>
                </Link>

              </div>
              
              {/* KELAS EKSPERIMEN */}
              <div>
                <p>KELAS EKSPERIMEN</p>

                <Link to={'/page_soal_pretest'}>
                  <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                    <label className='font-[Georgia] font-medium text-white text-[20px] bg-gray-800 p-2 rounded-xl cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Pre-Test</label>
                    </div>
                  </div>
                </Link>

              </div>
            </div>

            <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
                <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto'/>
                <div>
                  <button onClick={handleMulaiClick}>MULAI</button>
                  {showText && <div className=''>AYOO SEMANGAT MENGERJAKANNYA</div>}
                </div>
            </div>
        </div>

        {/* <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
          <div className='mx-auto max-w-7xl'>
              <p className='font-[serif] text-[40px]'>SOAL</p>

              <div className='bg-[#E6E6E6] h-auto py-4'>
                <div className='w-[95%] mx-auto font-[serif] text-[24px]'>
                  SOAL PEMBELAJARAN KELAS 5 SD
                </div>
   
                <Link to={"/page_soal_posttest"}>
                  <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                      <label className='font-[Georgia] text-[20px] bg-red-500 p-2 rounded-xl cursor-pointer'>Post-Test</label>
                    </div>
                  </div>
                </Link>
                
                <Link to={'/page_soal_pretest'}>
                  <div className='flex w-[95%] mx-auto bg-orange-400 h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                      <label className='font-[Georgia] text-[20px] bg-red-500 p-2 rounded-xl cursor-pointer'>Pre-Test</label>
                    </div>
                  </div>
                </Link>
                
              </div>
          </div>
        </div>   */}
    </section>
  )
}

export default Soal;
