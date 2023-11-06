import React, {useEffect} from 'react'
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if (!token) {
      navigate('/loginpage')
    } 
    // Cek apakah suara sudah diputar sebelumnya
    const hasSoundPlayed = localStorage.getItem('hasSoundPlayed');

    if (!hasSoundPlayed) {
      // Jika belum diputar, mainkan suara selamat datang
      const message = new SpeechSynthesisUtterance('Halo, selamat datang di website saya');
      window.speechSynthesis.speak(message);

      // Setel status telah diputar ke localStorage
      localStorage.setItem('hasSoundPlayed', 'true');
    }

    // Event listener untuk menghapus data dari localStorage saat website ditutup
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('hasSoundPlayed');
    });
  }, [navigate]);

  return (
    <section id='dashboard'>
        <Navbar/>
        <div className='max-w-7xl m-auto overflow-y-hidden'>
          <div className='flex-col items-center justify-center text-center'>
            <div className='font-[Georgia] mt-[6%]'>
              <p className='text-4xl font-bold'>Selamat Datang di MathPed</p>
              <p className='text-lg'>Website pembelajaran Matematika berbasis Agen Pedagogis</p>
            </div>
            
            <div className='flex border-2 w-[30%] justify-center m-auto rounded-xl border-[#1D809F]'>
              <img src="../asset/agen/guru.png" alt="" width={230}/>
            </div>

            <div className='flex justify-center'>
              {/* <button 
              type="button" 
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-3 font-[Georgia]"
              onClick={speak}>
                KLIK SAYA
              </button> */}
            </div>

            <div className='flex justify-center items-center h-auto mt-10'>
              <div className='grid grid-cols-2 md:grid-cols-2 gap-8 w-[50%]'>
                <div className='flex flex-col items-center bg-[#1D809F] rounded-md '>

                  <p className='font-[Georgia] text-lg'>Profile Sekolah</p>

                  <img src="../asset/sekolah/gedung_sekolah.png" alt="Gedung Sekolah" width={200} />

                  <button className='btn font-[Georgia]'>
                    Lihat Profile
                  </button>
                </div>

                <div className='bg-[#1D809F] rounded-md'>
                  INI ADALAH SEKOLAH
                </div>

                <div className='bg-[#1D809F] rounded-md'>
                  INI ADALAH SEKOLAH
                </div>

                <div className=''>
                  INI ADALAH SEKOLAH
                </div>

              </div>
            </div>

          </div>
        </div>
    </section>
  )
}

export default Dashboard;