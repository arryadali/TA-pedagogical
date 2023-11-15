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

      <div className='agenped'>
          <div className=''>

            <h1 className='font-[georgia] text-[40px] text-center'>SOAL</h1>

            {/* KELAS KONTROL */}
            <div className='font-[georgia]'>
              <p>KELAS KONTROL</p>

              <Link to={"/page_soal_posttest"}>
                <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                  <div className=''>
                  <label className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl cursor-pointer'>Post-Test</label>
                  </div>
                </div>
              </Link>

            </div>
            
            {/* KELAS EKSPERIMEN */}
            <div className='font-[georgia]'>
              <p>KELAS EKSPERIMEN</p>

              <Link to={'//page_soal_pretest'}>
                <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                  <div className=''>
                  <label className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl cursor-pointer'>Pre-Test</label>
                  </div>
                </div>
              </Link>

            </div>
          </div>

          <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
              <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto'/>
              <div>
                <button onClick={handleMulaiClick}>MULAI</button>
                {showText && <div className=''>AYOO SEMANGAT MENGERJAKANNYA Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate cumque natus ipsum dignissimos eveniet praesentium facilis itaque nisi, commodi obcaecati consequatur odio repudiandae, deleniti architecto eligendi enim ea repellat dicta? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis ducimus alias odit necessitatibus nemo ipsum a amet itaque facere! Accusantium, fugiat a! Placeat, eaque? Dignissimos esse asperiores tempore nam.</div>}
              </div>
          </div>
      </div>

    </section>
  )
}

export default Soal;
