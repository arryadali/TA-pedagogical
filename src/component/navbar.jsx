import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section id='navbar'>
        <div className='container'>
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
        </div>
    </section>
  )
}

export default Navbar;
