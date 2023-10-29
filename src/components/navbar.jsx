import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (

    <section id='navbar'>
      <nav class="bg-white border-gray-200 container">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className='flex items-center'>
            <img src="../asset/logo2.png" class="h-8 mr-3" alt="Flowbite Logo" />
          </div>

          <div className='flex items-center md:order-2'>
              <button type="button" class="flex mr-3 text-sm rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className='sr-only'>Open user menu</span>
                <img src="../asset/logo2.png" alt="" className='w-8 h-8 rounded-full'/>
              </button>

              <div className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow' id="user-dropdown">
                <div className='px-4 py-3'>
                  <span className='block text-sm text-gray-900 dark:text-white'>Bonnie Green</span>
                  <span className='block text-sm  text-gray-500 truncate'>name@flowbite.com</span>
                </div>

                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li className='block px-4 py-2 text-sm'>
                    <a href="/soal">Signout</a>
                  </li>
                </ul>
              </div>

              <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <Link to={'/dashboard'}>
                <li className='block py-2 pl-3 pr-4 text-black rounded md:hover:bg-[#1D809F] hover:text-white font-[Georgia]'>
                  Dashboard
                </li>
              </Link>

              <Link to={'/biodatasiswa'}>
                <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-[#1D809F] hover:text-white text-black font-[Georgia]'>
                  Biodata Siswa
                </li>
              </Link>

              <Link to={'/materi'}>
                <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-[#1D809F] hover:text-white text-black font-[Georgia]'>
                  Materi
                </li>
              </Link>

              <Link to={'/soal'}>
                <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-[#1D809F] hover:text-white text-black font-[Georgia]'>
                  Soal
                </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav>

    </section>
    // <section id='navbar'>
      
    //   <nav class="bg-red-500">
    //     <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //       <div className='flex items-center'>
    //         <img src="../asset/logo2.png" alt="Mathped Logo" className='h-8 mr-3'/>
    //       </div>

    //       <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //           <span class="sr-only">Open main menu</span>
    //           <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
    //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    //           </svg>
    //       </button>

    //       {/* Listnya */}
    //       <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //         <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
    //           <Link to={'/dashboard'}>
    //             <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-black md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:text-[#1D809F] font-[Georgia]'>
    //               Dashboard
    //             </li>
    //           </Link>
              
    //           <Link to={'/biodatasiswa'}>
    //             <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-black md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:text-[#1D809F] font-[Georgia]'>
    //               Biodata Siswa
    //             </li>
    //           </Link>

    //           <Link to={'/materi'}>
    //             <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-black md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:text-[#1D809F] font-[Georgia]'>
    //               Materi
    //             </li>
    //           </Link>
              
    //           <Link to={'/soal'}>
    //             <li className='block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-black md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:text-[#1D809F] font-[Georgia]'>
    //               Soal
    //             </li>
    //           </Link>

    //           <img src="../asset/logo2.png" alt="" className='w-6 h-6 rounded-full'/>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </section>
  )
}

export default Navbar;
