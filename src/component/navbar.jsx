import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section id='navbar'>
      
      <nav class="bg-white">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 shadow">
          <div className='flex items-center'>
            <img src="../asset/logo2.png" alt="Mathped Logo" className='h-8 mr-3'/>
          </div>

          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>

          {/* Bagian Listnya */}
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <Link to={'/homepage'}>
                <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-black md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:text-[#1D809F] font-[Georgia]'>
                  Dashboard
                </li>
              </Link>
              
              <Link to={'/biodatasiswa'}>
                <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-black md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:text-[#1D809F] font-[Georgia]'>
                  Biodata Siswa
                </li>
              </Link>

              <Link to={'/materi'}>
                <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-black md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:text-[#1D809F] font-[Georgia]'>
                  Materi
                </li>
              </Link>
              
              <Link to={'/soal'}>
                <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-black md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:text-[#1D809F] font-[Georgia]'>
                  Soal
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div class="relative shadow bg-white">
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

          <div class="w-full backdrop-blur-sm">
              <div class="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
                <img src="../asset/logo2.png" alt="" className='w-[10%]'/>

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
      </div> */}
    </section>
  )
}

export default Navbar;
