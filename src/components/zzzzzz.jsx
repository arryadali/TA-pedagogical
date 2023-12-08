import React from 'react'
import { Link } from 'react-router-dom';

const Full_materi = () => {
  const materiBacaPerkalianPembagian = [
    {
      judul : "perkalian dan pembagian pecahan",
      materi : "coba ini"
    }
  ]

  return (
    <section id='full_materi'>

      <nav>
        <div className='h-16 py-4 px-11'>
          <Link className='flex w-min gap-4' to={"/materi"}>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            <p className='text-xl font-[georgia]'>Materi</p>
          </Link>
        </div>
        <hr />
      </nav>

      <section id='hero' className='mt-14 m-auto max-w-screen-xl h-[400px] bg-red-400'>
        {materiBacaPerkalianPembagian.map((materi, index) => (
          <div key={index} className='font-[georgia]'>
            <h1 className='font-bold uppercase text-3xl'>{materi.judul}</h1>
            <p className='mt-2 text-xl'>{materi.materi}</p>
          </div>
        ))}
      </section>

      <footer>
          <div className='container'>
            <div className='h-16 bg-yellow-300 py-5'>
              <ul className='grid grid-cols-2 text-center'>
                <li className='bg-red-500 w-1/2 place-content-end'>Pengenalan Pecahan</li>
                <li className='bg-green-500 w-1/2 place-content-end'>Perkalian Pecahan dengan Bilangan Bulat</li>
              </ul>
              {/* <ul className='flex text-lg'>
                <li className='flex justify-end w-full bg-red-500 min-w-max'>
                  Pengenalan Pecahan
                </li>
                <li className='flex justify-end w-[78%] bg-green-500'>
                  Perkalian Pecahan dengan Bilangan Bulat
                  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                  </svg>
                </li>
              </ul> */}
            </div>
          </div>
      </footer>

    </section>
  )
}
export default Full_materi;