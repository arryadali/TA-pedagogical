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

      const audio = new Audio('../asset/audio/test.mp4');
      audio.play();

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
        <div className="max-w-7xl m-auto overflow-y-hidden min-h-screen font-[georgia]">
          <div className='flex-col justify-center text-center items-center'>
            <div className='mt-[6%]'>
              <p className='text-4xl font-bold'>Selamat Datang di MathPed</p>
              <p className='text-lg'>Website pembelajaran Matematika berbasis Agen Pedagogis</p>
            </div>
          </div>

          <div className='flex w-[75%] m-auto mt-[80px] shadow-2xl'>
            <div className='flex w-[40%] justify-end'>
              <img src="../asset/agen/guru.png" alt="" width={230}/>
            </div>

            <div className='bg-[#D9D9D9] w-[40%] m-auto h-[124px] rounded-[10px] mx-auto overflow-hidden'>
              <div className='p-4 text-justify'>
                Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint, doloremque corporis enim aliquam dolorum vel porro libero, ipsam animi odit corrupti neque iusto repellat repudiandae placeat itaque optio? Quos?
              </div>
            </div>
          </div>

          <div className='text-center mt-10'>
            <p>
              Ayo Mulai Belajar!
            </p>
          </div>
        </div>
    </section>
  )
}

export default Dashboard;