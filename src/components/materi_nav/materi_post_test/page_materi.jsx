import React from 'react'
import Navbar from '../../navbar';
import { Link } from 'react-router-dom';

const Page_materi = () => {
  return (
    <section id='page_materi'>
        <Navbar/>

        <div className='agenped'>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <img src="../asset/materi/pecahandanpembagian.png" alt="materi" className='h-[500px]'/>
                </div>
                <Link to={'/materi_belajar_posttest'}>
                    <button className='btn'>
                        Lanjutkan
                    </button>
                </Link>
            </div>
            <aside className='mt-16'>
                <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
                    <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
                    <div>
                        <button>
                        MULAI
                        </button>
                    </div>
                </div>
            </aside>
        </div>
        {/* <div className='flex max-w-7xl m-auto justify-center'>
            <img src="../asset/materi/pecahandanpembagian.png" alt="" height={200} className='h-[500px]'/>
        </div> */}
    </section>
  )
}

export default Page_materi;
