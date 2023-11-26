import React, { useState } from 'react';
import Navbar from '../../navbar';
import { useNavigate } from 'react-router-dom';

const Materi_perkalian = () => {
    const [currentStepPerkalian, setCurrentStepPerkalian] = useState(0);
    const [showStepsPerkalian, setshowStepsPerkalian] = useState(false);
    const navigate = useNavigate()

    const stepMateriPerkalian = [
        {
        judul: "Langkah 1",
        konten: "Jika dia membutuhkan 3/4 jumlah tepung kue, maka dia perlu 3/4 dari 2 1/3 cangkir. Menjadi",
        gambar:"/../asset/step/step1.png",
        },
        {
        judul: "Langkah 2",
        konten: "Untuk mengalikan bilangan campuran dan pecahan, pertama-tama jadikan bilangan campuran tersebut menjadi pecahan biasa.",
        gambar:"/../asset/step/step2.png",
        },
        {
        judul: "Langkah 3",
        konten: "Untuk mengalikan pecahan, kalikan pembilang dan penyebutnya, lalu sederhanakan. Setelah itu, ubahlah menjadi bilangan campuran!",
        gambar:"/../asset/step/step3.png",
        },
        {
        judul: "Langkah 4",
        konten: "Jawaban yang benar adalah C",
        gambar :"/../asset/step/step4.png",
        },
    ];
    
    const handleNext = () => {
        if (currentStepPerkalian < stepMateriPerkalian.length - 1) {
          setCurrentStepPerkalian(currentStepPerkalian + 1);
        } else {
          navigate('/latihan_soal_perkalian');
        }
    };

    const handlePrevious = () => {
        if (currentStepPerkalian > 0) {
          setCurrentStepPerkalian(currentStepPerkalian - 1);
        }
    };

    const handleStart = async () => {
        setshowStepsPerkalian(true);
    };

  return (
    <section id='materi_posttest'>
      <Navbar />
      <div className='agenped font-[georgia]'>
        <div className="container mx-auto mt-14">
          <div className="p-4">
            <div className='border-2 h-auto p-4 text-center'>
              <p>Lisa mengikuti resep kue yang jumlah gulanya dibutuhkan <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>3</mn><mn>4</mn></mfrac></math>  jumlah tepung yang dibutuhkan. <br />Jika Lisa menggunakan 2 <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>3</mn></mfrac></math>. cangkir tepung. <br /> Berapa cangkir gula yang dibutuhkan Lisa untuk membuat kuenya?</p>
              <ul>
                <li className='mt-3'>A. 1 <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>7</mn><mn>12</mn></mfrac></math></li>
                <li className='mt-3'>B. 3 <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>9</mn></mfrac></math></li>
                <li className='mt-3'>C. 1 <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>3</mn><mn>4</mn></mfrac></math></li>
                <li className='mt-3'>D. 3 <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>12</mn></mfrac></math></li>
              </ul>
            </div>

            {!showStepsPerkalian && (
              <button
                className="btn mt-12"
                onClick={handleStart}
              >
                Mulai
              </button>
            )}

            {showStepsPerkalian && stepMateriPerkalian && stepMateriPerkalian.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4 mt-12">
                    {stepMateriPerkalian[currentStepPerkalian]?.judul}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>{stepMateriPerkalian[currentStepPerkalian]?.konten}</p>
                  <img src={stepMateriPerkalian[currentStepPerkalian]?.gambar} alt="Step" className='m-auto'/>

                  <div className="flex justify-between mt-4">
                    {currentStepPerkalian > 0 && (
                      <button
                        className="btn"
                        onClick={handlePrevious}
                      >
                        Kembali
                      </button>
                    )}
                    {currentStepPerkalian === stepMateriPerkalian.length - 1 ? (
                      <button
                        className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                        onClick={handleNext}
                        disabled={!showStepsPerkalian}
                      >
                        Selesai
                      </button>
                    ) : (
                      <button
                        className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                        onClick={handleNext}
                        disabled={!showStepsPerkalian}
                      >
                        Selanjutnya
                      </button>
                    )}
                  </div>
                </>
              )}

          </div>
        </div>

        <aside className='mt-12'>
          <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
            <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
            <div>
              <button>
                MULAI
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Materi_perkalian
