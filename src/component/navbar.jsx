import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section id='navbar'>
      <div class="relative shadow bg-white">
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

          <div class="w-full backdrop-blur-sm">
              <div class="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
                <img src="../asset/logo.png" alt="" className='w-[10%]'/>

                  <ul class="flex items-center gap-12">
                      <Link to={'/homepage'}>
                        <li className='hover:text-[#1D809F] transition-colors text-black'>
                          Dashboard
                        </li>
                      </Link>
                      <Link to={'/biodatasiswa'}>
                        <li className='hover:text-[#1D809F] transition-colors text-black'>
                          Biodata Siswa
                        </li>
                      </Link>
                      <Link to={'/materi'}>
                        <li className='hover:text-[#1D809F] transition-colors text-black'>
                          Materi
                        </li>
                      </Link>
                      <Link to={'/soal'}>
                        <li className='hover:text-[#1D809F] transition-colors text-black'>
                          Soal
                        </li>
                      </Link>
                  </ul>
              </div>
          </div>
      </div>
        {/* <div className='container'>
          <nav className='flex h-[70px] bg-yellow-400'>
            <div className='bg-red-500'>
              LOGO
            </div>
            <div className='ml-auto mt-auto mb-auto'>
              <ul className="flex gap-20 mt-auto mr-32 ">
                <Link to={'/homepage'}>
                  <li className='hover:bg-green-500 p-2'>Dashboard</li>
                </Link>
                <Link to={'/biodatasiswa'}>
                  <li className='hover:bg-green-500 p-2'>Biodata Siswa</li>
                </Link>
                <Link to={'/materi'}>
                  <li className='hover:bg-green-500 p-2'>Materi</li>
                </Link>
                <Link to={'/soal'}>
                  <li className='hover:bg-green-500 p-2'>Soal</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div> */}
    </section>
  )
}

export default Navbar;
