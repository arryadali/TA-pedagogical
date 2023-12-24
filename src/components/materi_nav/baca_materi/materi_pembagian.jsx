import React, {useState} from 'react'
import Navbar from '../../navbar'
import { useNavigate } from 'react-router-dom';

const Materi_pembagian = () => {
    const [currentStepPembagian, setCurrentStepPembagian] = useState(0);
    const [currentMateriIndexPembagian, setCurrentMateriIndexPembagian] = useState(0);
    const [showStepsPembagian, setshowStepsPembagian] = useState(false);
    const [audioSrcPembagian, setAudioSrcPembagian] = useState('');

    const navigate = useNavigate()

    const materiPembagian = [
      {
          question: "1. Hisyam memiliki 2/3 jumlah makanan dan Kiani memiliki 5/6 jumlah makanan. Hisyam ingin mengalikan jumlah makanan tersebut dengan Kiani. Berapa total jumlah makanan yang dimiliki Hisyam setelah dikalikan dengan Kiani?",
          options: [
              {
                  id: 'A',
                  text: "5/9",
              },
              {
                  id: 'B',
                  text: "10/6",
              },
              {
                  id: 'C',
                  text: "9/8",
              },
              {
                  id: 'D',
                  text: "7/6",
              },
          ],
          stepsMateriPembagian : [
              {
                  judul: "Langkah 1",
                  konten: "Jika Hisyam memiliki 2/3 makanan dan Kiani memiliki 5/6 jumlah makanan, maka",
                  gambar: "/../asset/step/perkalian/step1.1.png",
                  suara : "../asset/audio/materi/perkalian/step1.mp4"
              },
              {
                  judul: "Langkah 2",
                  konten: "Untuk mengalikan pecahan, kalikan pembilang dan penyebutnya",
                  gambar: "/../asset/step/perkalian/step1.2.png",
                  suara : "../asset/audio/materi/perkalian/step2.mp4"
              },
              {
                  judul: "Langkah 3",
                  konten: "Jika pecahan tersebut bisa disederhanakan, sederhanakanlah pecahan tersebut",
                  gambar: "/../asset/step/perkalian/step1.3.png",
                  suara : "../asset/audio/materi/perkalian/step3.mp4"
              },
              {
                  judul: "Langkah 4",
                  konten: "Jawaban yang benar adalah A",
                  gambar: "/../asset/step/perkalian/step1.4.png",
                  suara : "../asset/audio/materi/perkalian/step4.mp4"
              },
          ],
      },
      {
          question: "2. Lisa mengikuti resep kue yang jumlah gulanya dibutuhkan 3/4 jumlah tepung yang dibutuhkan. Jika Lisa menggunakan 2 1/3 cangkir tepung. Berapa cangkir gula yang dibutuhkan Lisa untuk membuat kuenya?",
          options: [
              {
                  id: 'A',
                  text: "1 7/12",
              },
              {
                  id: 'B',
                  text: "3 1/9",
              },
              {
                  id: 'C',
                  text: "1 3/4",
              },
              {
                  id: 'D',
                  text: "3 1/12",
              },
          ],
          stepsMateriPembagian : [
              {
                  judul: "Langkah 1",
                  konten: "Jika dia membutuhkan 3/4 jumlah tepung kue, maka dia perlu 3/4 dari 2 1/3 cangkir. Menjadi",
                  gambar: "/../asset/step/perkalian/step2.1.png",
                  suara : "../asset/audio/materi/perkalian/step1.mp4"
              },
              {
                  judul: "Langkah 2",
                  konten: "Untuk mengalikan bilangan campuran dan pecahan, pertama-tama jadikan bilangan campuran tersebut menjadi pecahan biasa.",
                  gambar: "/../asset/step/perkalian/step2.2.png",
                  suara : "../asset/audio/materi/perkalian/step2.mp4"
              },
              {
                  judul: "Langkah 3",
                  konten: "Untuk mengalikan pecahan, kalikan pembilang dan penyebutnya, lalu sederhanakan. Setelah itu, ubahlah menjadi bilangan campuran!",
                  gambar: "/../asset/step/perkalian/step2.3.png",
                  suara : "../asset/audio/materi/perkalian/step3.mp4"
              },
              {
                  judul: "Langkah 4",
                  konten: "Jawaban yang benar adalah C",
                  gambar: "/../asset/step/perkalian/step2.4.png",
                  suara : "../asset/audio/materi/perkalian/step4.mp4"
              },
          ],
      },
      {
          question: "3. INI NO 3",
          options: [
              {
                  id: 'A',
                  text: "1 7/12",
              },
              {
                  id: 'B',
                  text: "3 1/9",
              },
              {
                  id: 'C',
                  text: "1 3/4",
              },
              {
                  id: 'D',
                  text: "3 1/12",
              },
          ],
          stepsMateriPembagian : [
              {
                  judul: "Langkah 1",
                  konten: "BELOMMMMMMMMMM",
                  gambar: "/../asset/step/perkalian/step1.png",
                  suara : "../asset/audio/materi/perkalian/step1.mp4"
              },
              {
                  judul: "Langkah 2",
                  konten: "BELOMMMMMMMMMM.",
                  gambar: "/../asset/step/perkalian/step2.png",
                  suara : "../asset/audio/materi/perkalian/step2.mp4"
              },
              {
                  judul: "Langkah 3",
                  konten: "BELOMMMMMMMMMM",
                  gambar: "/../asset/step/perkalian/step3.png",
                  suara : "../asset/audio/materi/perkalian/step3.mp4"
              },
              {
                  judul: "Langkah 4",
                  konten: "BELOMMMMMMMMMM",
                  gambar: "/../asset/step/perkalian/step4.png",
                  suara : "../asset/audio/materi/perkalian/step4.mp4"
              },
          ],
      },
  ];

    const handleNext = () => {
      if (currentStepPembagian < materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian.length - 1) {
          setCurrentStepPembagian(currentStepPembagian + 1);
          setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian + 1].suara);
      } else {
          if (currentMateriIndexPembagian < materiPembagian.length - 1) {
              setCurrentMateriIndexPembagian(currentMateriIndexPembagian + 1);
              setCurrentStepPembagian(0);
              setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian + 1].stepsMateriPembagian[0].suara);
          } else {
              navigate('/latihan_soal_pembagian');
          }
      }
  };

  const handlePrevious = () => {
    if (currentStepPembagian > 0) {
        setCurrentStepPembagian(currentStepPembagian - 1);
        setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian - 1].suara);
    } else {
        if (currentMateriIndexPembagian > 0) {
            setCurrentMateriIndexPembagian(currentMateriIndexPembagian - 1);
            setCurrentStepPembagian(materiPembagian[currentMateriIndexPembagian - 1].stepsMateriPembagian.length - 1);
            setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian].suara);
        }
    }
};

const handleStart = async () => {
  setshowStepsPembagian(true);
  setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian].suara);
};
    
  return (
    <section>
            <Navbar />
            <div className='agenped font-[georgia]'>
                <div className="container mx-auto mt-10">
                    <div>
                        <div className='border-2 h-auto p-4 text-center'>
                            <p>{materiPembagian[currentMateriIndexPembagian].question}</p>
                            <ul>
                                {materiPembagian[currentMateriIndexPembagian].options.map((option) => (
                                    <li key={option.id} className='mt-3'>{`${option.id}. ${option.text}`}</li>
                                ))}
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

                        {showStepsPembagian && materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian && materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian.length > 0 && (
                            <>
                                <h2 className="text-2xl font-bold mb-4 mt-6">
                                    {materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian]?.judul}
                                </h2>
                                <p style={{ whiteSpace: "pre-line" }}>{materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian]?.konten}</p>
                                <img src={materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian]?.gambar} alt="Step" className='m-auto' />

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
                                    {currentStepPembagian === materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian.length - 1 ? (
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
                    </div>
                </aside>
            </div>
        </section>
  )
}

export default Materi_pembagian
