import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

const Materi = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const location = useLocation();
  const isBacaMateri = location.pathname === '/materi';
  const [audio] = useState(new Audio("../asset/audio/materi/materi.mp4"));

  const playAudioMateri = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='materi'>
        <Navbar/>

        <div className='agenped'>
            <div className='mt-16'>

              <div className='font-[georgia] text-center'>
                <h1 className=' text-[40px]'>MATERI</h1>
                <p className='text-[20px]'>Perkalian dan Pembagian Pecahan</p>
              </div>

              <div className='font-[georgia] mt-10'>
                
                <div>
                  <p>Kelas Kontrol</p>
                  <Link to={"/full_materi"}>
                    <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                      <div>
                        <label className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl cursor-pointer'>
                          Baca Materi
                        </label>
                      </div>
                    </div>
                  </Link>
                </div>

                <div>
                  <p>Kelas Eksperimen</p>
                  <Link to={"/page_materi"}>
                    <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                      <div>
                        <label className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl cursor-pointer'>
                          Baca Materi
                        </label>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>

            </div>

            <aside className='mt-12'>
              <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
                  <div className='px-4 py-6 text-justify'>
                    {isBacaMateri && showMessage ? (
                      <p className='font-[georgia]'>
                        Disini kita akan membaca materi tentang perkalian dan pembagian pecahan. Silahkan klik “ Baca Materi “
                      </p>
                    ) : null}
                  </div>
              </div>

              <div className='text-center font-[georgia] mt-4'>
                <p>Klik tombol dibawah ini untuk memakai suara!</p>
                <button className='btn mt-4' onClick={playAudioMateri}>
                  {isPlaying ? 'Hentikan' : 'Suara'}
                </button>
              </div>
            </aside>

        </div>
    </section>
  )
}

export default Materi;