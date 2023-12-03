import React, {useState} from 'react'
import Navbar from '../../navbar'
import { useNavigate } from 'react-router-dom';

const Materi_pembagian = () => {
    const [currentStepPembagian, setCurrentStepPembagian] = useState(0);
    const [showStepsPembagian, setshowStepsPembagian] = useState(false);
    const [audioSrcPembagian, setAudioSrcPembagian] = useState('');

    const navigate = useNavigate()

    const stepMateriPembagian = [
        {
        judul: "Langkah 1",
        konten: "Ubahlah pecahan campuran menjadi pecahan biasa terlebih dahulu",
        gambar: "/../asset/step/pembagian/step1.png",
        },
        {
        judul: "Langkah 2",
        konten: "Untuk membagi pecahan. Ubahlah posisi pembilang dan penyebutnya, lalu bagi dengan angka yang bisa dibagi oleh keduanya",
        gambar: "/../asset/step/pembagian/step2.png",
        },
        {
        judul: "Langkah 3",
        konten: "Jawaban yang benar adalah B",
        gambar: "/../asset/step/pembagian/step3.png",
        },
    ];

    const audioPathsPembagian = [
      '../asset/audio/materi/pembagian/step1.mp4',
      '../asset/audio/materi/pembagian/step2.mp4',
      '../asset/audio/materi/pembagian/step3.mp4',
    ];

    const handleNext = () => {
        if (currentStepPembagian < stepMateriPembagian.length - 1) {
        setCurrentStepPembagian(currentStepPembagian + 1);
        setAudioSrcPembagian(audioPathsPembagian[currentStepPembagian + 1]);
        } else {
            navigate('/latihan_soal_pembagian');
        }
    };

    const handlePrevious = () => {
        if (currentStepPembagian > 0) {
        setCurrentStepPembagian(currentStepPembagian - 1);
        setAudioSrcPembagian(audioPathsPembagian[currentStepPembagian - 1]);
        }
    };

    const handleStart = async () => {
        setshowStepsPembagian(true);
        setAudioSrcPembagian(audioPathsPembagian[currentStepPembagian]);
    };
    
  return (
    <section>
        <Navbar/>

        <div className='agenped font-[georgia] overflow-hidden'>
            <div className='container mx-auto p-4'>
                <div className='bg-white p-5 rounded'>
                    <div className='border-2 h-auto p-4 text-center'>
                        <p>
                          Sebatang besi yang panjangnya 3 m memiliki berat <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></math>. <br /> Berapa berat per meternya?
                        </p>

                        <ul>
                            <li className='mt-3'>A. <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>4</mn></mfrac></math></li>
                            <li className='mt-3'>B. <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>3</mn><mn>4</mn></mfrac></math></li>
                            <li className='mt-3'>C. <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>2</mn><mn>3</mn></mfrac></math></li>
                            <li className='mt-3'>D. <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>2</mn><mn>5</mn></mfrac></math></li>
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
                  <img src={stepMateriPembagian[currentStepPembagian]?.gambar} alt="Step" className='m-auto' />
                  
                  <audio controls autoPlay src={audioSrcPembagian} className='m-auto mt-2'/>

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

export default Materi_pembagian
