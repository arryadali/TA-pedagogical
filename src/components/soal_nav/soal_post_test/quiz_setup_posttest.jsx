import React, {useState, useEffect} from 'react'
import Navbar from '../../navbar';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../../redux/result_reducer';

const Quiz_setup_posttest = () => {
    const inputRef = useRef()
    const dispatch = useDispatch()
    
    const startQuiz = () => {
        if(inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    useEffect(() => {
        const nama = localStorage.getItem('NAMA'); 
        if (nama) {
          inputRef.current.value = nama;
        }
      }, []);

    // Agen pedagogis
    const [showText, setShowText] = useState(false);

    const handleMulaiClick = () => {
        setShowText(true)

        // Set timeout untuk menyembunyikan teks setelah 5 detik
        setTimeout(() => {
        setShowText(false);
        }, 5000); // 5000 milidetik = 5 detik
    }

  return (
    <section id='quiz_setup'>
        <Navbar/>

        <div className='agenped'>
            <div className='text-center font-[Georgia]'>
                <h1 className='text-center font-bold text-2xl mb-[5%]'>INTRUKSI QUIZ</h1>

                <ol className='mb-[5%] list-decimal pl-4 text-justify'>
                    <li>Quiz ini mempunyai 10 soal yang harus kalian jawab</li>
                    <li>10 point diberikan jika kalian benar</li>
                    <li>Setiap pertanyaan memiliki beberapa opsi. Kalian hanya bisa memilih 1 jawaban</li>
                    <li>Kalian bisa mengganti jawaban ketika belum menyelesaikan quiz</li>
                    <li>Hasil akan keluar saat sudah menyelesaikan Quiz</li>
                </ol>

                <form id='form text-center'>
                    <input ref={inputRef} type="text" placeholder='Masukan Username'className='mb-[5%] p-2 border border-gray-300 rounded w-[50%] text-center'/>
                </form>

                <div className='text-center'>
                    <Link className='btn' to={'/soal_belajar_posttest'} onClick={startQuiz}>Start Quiz</Link>
                </div>
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

export default Quiz_setup_posttest;
