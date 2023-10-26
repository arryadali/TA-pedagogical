import React from 'react'
import Navbar from '../navbar';

const Dashboard = () => {
  const { speechSynthesis, SpeechSynthesisUtterance } = window;

  const speak = () => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance('Halo nama saya Arrya');
      // Mengatur kecepatan suara
      utterance.rate = 0.8;

      // Ambil suara yang ingin Anda gunakan (berdasarkan indeks)
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        utterance.voice = voices[2]; // Ganti dengan suara yang sesuai
      }

      speechSynthesis.speak(utterance);
    } else {
      console.error('Browser tidak mendukung text-to-speech.');
    }

  };

  return (
    <section id='dashboard'>
        <Navbar/>
        <div className='max-w-7xl m-auto'>
          <div className='flex-col'>
            <div className='text-center font-[Georgia] mt-[10%]'>
              <p className='text-4xl font-bold'>Selamat Datang di MathPed</p>
              <p className='text-lg'>Website pembelajaran Matematika berbasis Agen Pedagogis</p>
            </div>
            <div className='flex border-2 w-[30%] justify-center m-auto rounded-xl border-[#1D809F]'>
              <img src="../asset/agen/guru.png" alt="" width={230}/>
            </div>

            <div className='flex justify-center'>
              <button 
              type="button" 
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-3 font-[Georgia]"
              onClick={speak}>
                KLIK SAYA
              </button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
              <div className=''>
                INI ADALAH SEKOLAH
              </div>
              <div className='bg-purple-600'>
                2
              </div>
              <div className='bg-purple-600'>
                3
              </div>
              <div className='bg-purple-600'>
                4
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Dashboard;