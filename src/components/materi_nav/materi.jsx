import React, {useState} from 'react'
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

const Materi = () => {
  const [showText, setShowText] = useState(false);

  const handleMulaiClick = () => {
    setShowText(true)

    // Set timeout untuk menyembunyikan teks setelah 5 detik
    setTimeout(() => {
      setShowText(false);
    }, 5000); // 5000 milidetik = 5 detik
  }

  return (
    <section id='materi'>
        <Navbar/>

        <div className='agenped'>
            <div className='mt-16'>

              <h1 className='font-[georgia] text-[40px] text-center'>MATERI</h1>

              <div className='font-[georgia] mt-6'>
                <p>Perkalian dan Pembagian Pecahan</p>

                <Link to={"/page_materi"}>
                  <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                    <div className=''>
                    <label className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl cursor-pointer'>Baca Materi</label>
                    </div>
                  </div>
                </Link>

              </div>

            </div>

            <aside className='mt-16'>
              <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
                  <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto'/>
                  <div>
                    <button onClick={handleMulaiClick}>MULAI</button>
                    {showText && <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officia nemo doloremque ea consequatur recusandae fuga vitae dolorum quam laudantium, cumque ipsa eaque velit iure quia aliquam quo veritatis delectus.</div>}
                  </div>
              </div>
            </aside>
        </div>
    </section>
  )
}

export default Materi;
