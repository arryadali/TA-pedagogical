import React, { useState } from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

const Soal = () => {
  const [audio] = useState(new Audio("../asset/audio/materi/page_materi.mp4"));
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudioSoal = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id='soal'>
      <Navbar />

      <div className='agenped'>
        <div className='mt-16'>
          <div className='font-[georgia] text-center'>
            <h1 className=' text-[40px]'>SOAL</h1>
            <p className='text-[20px]'>Perkalian dan Pembagian Pecahan</p>
          </div>

          {/* KELAS KONTROL */}
          <div className='font-[georgia] mt-6'>
            <p>KELAS KONTROL</p>

            <Link to={"/quiz_setup"}>
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

        <aside className='mt-12'>
          <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
            <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
            <div>
              <button onClick={playAudioSoal}>
                {isPlaying ? 'Hentikan' : 'Suara'}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Soal;
