import React, { useState } from 'react';
import Navbar from '../../navbar';
import { useNavigate } from 'react-router-dom';

const Materi_belajar_posttest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSteps, setShowSteps] = useState(false);
  const navigate = useNavigate()

  const stepMateri = [
    {
      judul: "Langkah 1",
      konten: `Jika dia membutuhkan 3/4 jumlah tepung kue, maka dia perlu 3/4 dari 2 1/3 cangkir. Menjadi <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>&#xd7;</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>=</mo></math>`
    },
    {
      judul: "Langkah 2",
      konten: `Untuk mengalikan bilangan campuran dan pecahan, pertama-tama jadikan bilangan campuran tersebut menjadi pecahan biasa. 2 1/3 => (2 x 3) + 1 / 3 => 7/3`
    },
    {
      judul: "Langkah 3",
      konten: `Untuk mengalikan pecahan, kalikan pembilang dan penyebutnya, lalu sederhanakan. 7/3 x 3/4 = 7x3 / 3x4 = 7x3 / 3x4 = 7/4 Sekarang, ubahlah menjadi bilangan campuran!`
    },
    {
      judul: "Langkah 4",
      konten: `Jawaban yang benar adalah 1 3/4`
    },
  ];
  
  
  const handleNext = () => {
    if (currentStep < stepMateri.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/latihan_soal_posttest');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStart = async () => {
    setShowSteps(true);
  };

  return (
    <section id='materi_posttest'>
      <Navbar />
      <div className='agenped font-[georgia]'>
        <div className="container mx-auto p-4">
          <div className="bg-white p-6 rounded">
            <div className='border-2 h-auto p-4 text-center'>
              <p>Lisa mengikuti resep kue yang jumlah gulanya dibutuhkan <sup>3</sup>/<sub>4</sub> jumlah tepung yang dibutuhkan. <br />Jika Lisa menggunakan 2 <sup>1</sup>/<sub>3</sub> cangkir tepung. <br />Berapa cangkir gula yang dibutuhkan Lisa untuk membuat kuenya?</p>
              <ul>
                <li>A. 1 <sup>7</sup>/<sub>12</sub></li>
                <li>B. 3 <sup>1</sup>/<sub>9</sub></li>
                <li>C. 1<sup>3</sup>/<sub>4</sub></li>
                <li>D. 3<sup>1</sup>/<sub>12</sub></li>
              </ul>
            </div>

            {!showSteps && (
              <button
                className="btn mt-12"
                onClick={handleStart}
              >
                Mulai
              </button>
            )}

            {showSteps && stepMateri && stepMateri.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4 mt-12">
                    {stepMateri[currentStep]?.judul}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>{stepMateri[currentStep]?.konten}</p>
                  <div className="flex justify-between mt-4">
                    {currentStep > 0 && (
                      <button
                        className="btn"
                        onClick={handlePrevious}
                      >
                        Kembali
                      </button>
                    )}
                    {currentStep === stepMateri.length - 1 ? (
                      <button
                        className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                        onClick={handleNext}
                        disabled={!showSteps}
                      >
                        Selesai
                      </button>
                    ) : (
                      <button
                        className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                        onClick={handleNext}
                        disabled={!showSteps}
                      >
                        Selanjutnya
                      </button>
                    )}
                  </div>
                </>
              )}

          </div>
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
    </section>
  )
}

export default Materi_belajar_posttest;