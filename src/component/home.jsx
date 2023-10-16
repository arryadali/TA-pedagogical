import React from 'react'
import Navbar from './navbar';

const Home = () => {
  return (
    <section id='home'>
        <Navbar/>
        <div className='max-w-7xl m-auto'>
          <div className='flex-col'>
            <div className='text-center font-sans mt-[10%]'>
              <p className='text-4xl font-bold'>Selamat Datang di MathPed</p>
              <p className='text-lg'>Website pembelajaran Matematika berbasis Agen Pedagogis</p>
            </div>
            <div className='flex border-2 w-[30%] justify-center m-auto rounded-xl border-[#1D809F]'>
              <img src="../asset/agen/guru.png" alt="" width={230}/>
            </div>

            <div>
              <article className='bg-red-500 text-center'>
                Ini adalah guru agen pedagogis yang bernama Ibu .........! Nanti Ibu .... yang akan nemenin kalian untuk mengerjakan menyelesaikan tugas-tugas yang ada pada web pembelajaran ini.
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home;