/* eslint-disable flowtype/require-valid-file-annotation */
import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if (!token) {
        navigate('/signin')
    }
}, [navigate])

  return (

    <section id='navbar'>
      <nav class="bg-white border-gray-200 container">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className='flex items-center'>
            <img src="../asset/logo2.png" class="h-8 mr-3" alt="Flowbite Logo" />
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

              <button
                className='block py-2 pl-3 pr-4 rounded md:hover:bg-[#1D809F] hover:text-white text-black font-[Georgia]'
                onClick={() => {
                  // Tampilkan konfirmasi
                  const userConfirmation = window.confirm("Apakah Anda yakin ingin keluar?");

                  // Jika pengguna mengkonfirmasi, hapus data dari localStorage dan navigasikan ke halaman login
                  if (userConfirmation) {
                    localStorage.clear();
                    navigate('/loginpage');
                  }
                }}
              >
                Logout
              </button>
            </ul>
            
          </div>
        </div>
      </nav>

    </section>
  )
}

export default Navbar;
