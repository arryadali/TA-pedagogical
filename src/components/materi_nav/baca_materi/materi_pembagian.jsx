import React, {useState} from 'react'
import Navbar from '../../navbar'
import { useNavigate } from 'react-router-dom';

const Materi_pembagian = () => {
    const [currentStepPembagian, setCurrentStepPembagian] = useState(0);
    const [showStepsPembagian, setshowStepsPembagian] = useState(false);

    const navigate = useNavigate()

    const stepMateriPembagian = [
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
        if (currentStepPembagian < stepMateriPembagian.length - 1) {
        setCurrentStepPembagian(currentStepPembagian + 1);
        } else {
            navigate('/latihan_soal_pembagian');
        }
    };

    const handlePrevious = () => {
        if (currentStepPembagian > 0) {
        setCurrentStepPembagian(currentStepPembagian - 1);
        }
    };

    const handleStart = async () => {
        setshowStepsPembagian(true);
    };
    
  return (
    <section>
        <Navbar/>

        <div className='agenped font-[georgia] overflow-hidden'>
            <div className='container mx-auto p-4'>
                <div className='bg-white p-5 rounded'>
                    <div className='border-2 h-auto p-4 text-center'>
                        <p>
                            Terdapat pita sepanjang <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>8</mn><mn>2</mn></mfrac></math> m. Kita akan membuatnya menjadi 2 pita yang sama panjang. <br /> Berapa m panjang setiap potongan pita?
                        </p>

                        <ul>
                            <li className='mt-3'>A. 1 <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>4</mn><mn>2</mn></mfrac></math></li>
                            <li className='mt-3'>B. <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>3</mn><mn>2</mn></mfrac></math></li>
                            <li className='mt-3'>C. 2</li>
                            <li className='mt-3'>D. 4<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>4</mn><mn>2</mn></mfrac></math></li>
                        </ul>
                    </div>

                    {!showStepsPembagian && (
              <button
                className="btn mt-12"
                onClick={handleStart}
              >
                Mulai
              </button>
            )}

            {showStepsPembagian && stepMateriPembagian && stepMateriPembagian.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4 mt-12">
                    {stepMateriPembagian[currentStepPembagian]?.judul}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>{stepMateriPembagian[currentStepPembagian]?.konten}</p>
                  <div className="flex justify-between mt-4">
                    {currentStepPembagian > 0 && (
                      <button
                        className="btn"
                        onClick={handlePrevious}
                      >
                        Kembali
                      </button>
                    )}
                    {currentStepPembagian === stepMateriPembagian.length - 1 ? (
                      <button
                        className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                        onClick={handleNext}
                        disabled={!showStepsPembagian}
                      >
                        Selesai
                      </button>
                    ) : (
                      <button
                        className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                        onClick={handleNext}
                        disabled={!showStepsPembagian}
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

export default Materi_pembagian
