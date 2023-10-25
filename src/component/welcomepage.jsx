import React from 'react'
import { Link } from 'react-router-dom';

const Welcomepage = () => {
  return (
    <section id='welcomepage'>
        <div className='bg-banner container'>
          <ul className="py-[14%] font-sans text-center items-center h-screen">
              <li className='text-[40px] font-medium mb-[45px]'>
                  Aplikasi Pembelajaran <pre className='text-[40px] font-medium font-sans'> Agen Pedagogis </pre>
              </li>
              <li className="text-[20px] font-bold text-[#B6B6B6] mb-[60px]">
                  Website pembelajaran Matematika menggunakan Agen Pedagogis
              </li>
              <li>
                <Link to={"/loginpage"}>
                  <button className="bg-[#1D809F] w-[10rem] h-[3.8rem] font-bold text-white text-[20px] rounded-md">
                    Mulai
                  </button>
                </Link>
              </li>
          </ul>
        </div>
    </section>
  )
}

export default Welcomepage;
