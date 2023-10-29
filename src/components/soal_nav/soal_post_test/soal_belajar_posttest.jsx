import React, {useState} from 'react'
import Navbar from '../../navbar'

const Soal_belajar_posttest = () => {
  const [showText, setShowText] = useState(false);

  const handleMulaiClick = () => {
    setShowText(true)

    // Set timeout untuk menyembunyikan teks setelah 5 detik
    setTimeout(() => {
      setShowText(false);
    }, 5000); // 5000 milidetik = 5 detik
  }
  return (
    <section id='soal_belajar_posttest'>
        <Navbar/>

        <div className='grid grid-cols-2 gap-10 w-[82%] m-auto'>
            <div>
                <img src="../asset/materi/pecahan.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, dignissimos repudiandae sunt cumque nobis facere ut fuga, ducimus unde asperiores. Tenetur voluptates excepturi doloremque sequi, minima veniam magnam labore.</p>
            </div>

            <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
                <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto'/>
                <div>
                  <button onClick={handleMulaiClick}>MULAI</button>
                  {showText && <div className=''>AYOO SEMANGAT MENGERJAKANNYA</div>}
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Soal_belajar_posttest
