import React, { useState } from 'react';
import Navbar from '../../navbar';
import { useNavigate } from 'react-router-dom';

const Materi_perkalian = () => {
    const [currentStepPerkalian, setCurrentStepPerkalian] = useState(0);
    const [currentMateriIndex, setCurrentMateriIndex] = useState(0);
    const [showStepsPerkalian, setshowStepsPerkalian] = useState(false);
    const [audioSrcPerkalian, setAudioSrcPerkalian] = useState('');

    const navigate = useNavigate();

    const materiPerkalian = [
        {
            question: "1. INI NO 1",
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
            stepsMateriPerkalian : [
                {
                    judul: "Langkah 1",
                    konten: "Jika dia membutuhkan 3/4 jumlah tepung kue, maka dia perlu 3/4 dari 2 1/3 cangkir. Menjadi",
                    gambar: "/../asset/step/perkalian/step1.png",
                    suara : "../asset/audio/materi/perkalian/step1.mp4"
                },
                {
                    judul: "Langkah 2",
                    konten: "Untuk mengalikan bilangan campuran dan pecahan, pertama-tama jadikan bilangan campuran tersebut menjadi pecahan biasa.",
                    gambar: "/../asset/step/perkalian/step2.png",
                    suara : "../asset/audio/materi/perkalian/step2.mp4"
                },
                {
                    judul: "Langkah 3",
                    konten: "Untuk mengalikan pecahan, kalikan pembilang dan penyebutnya, lalu sederhanakan. Setelah itu, ubahlah menjadi bilangan campuran!",
                    gambar: "/../asset/step/perkalian/step3.png",
                    suara : "../asset/audio/materi/perkalian/step3.mp4"
                },
                {
                    judul: "Langkah 4",
                    konten: "Jawaban yang benar adalah C",
                    gambar: "/../asset/step/perkalian/step4.png",
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
            stepsMateriPerkalian : [
                {
                    judul: "Langkah 1",
                    konten: "Jika dia membutuhkan 3/4 jumlah tepung kue, maka dia perlu 3/4 dari 2 1/3 cangkir. Menjadi",
                    gambar: "/../asset/step/perkalian/step1.png",
                    suara : "../asset/audio/materi/perkalian/step1.mp4"
                },
                {
                    judul: "Langkah 2",
                    konten: "Untuk mengalikan bilangan campuran dan pecahan, pertama-tama jadikan bilangan campuran tersebut menjadi pecahan biasa.",
                    gambar: "/../asset/step/perkalian/step2.png",
                    suara : "../asset/audio/materi/perkalian/step2.mp4"
                },
                {
                    judul: "Langkah 3",
                    konten: "Untuk mengalikan pecahan, kalikan pembilang dan penyebutnya, lalu sederhanakan. Setelah itu, ubahlah menjadi bilangan campuran!",
                    gambar: "/../asset/step/perkalian/step3.png",
                    suara : "../asset/audio/materi/perkalian/step3.mp4"
                },
                {
                    judul: "Langkah 4",
                    konten: "Jawaban yang benar adalah C",
                    gambar: "/../asset/step/perkalian/step4.png",
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
            stepsMateriPerkalian : [
                {
                    judul: "Langkah 1",
                    konten: "Jika dia membutuhkan 3/4 jumlah tepung kue, maka dia perlu 3/4 dari 2 1/3 cangkir. Menjadi",
                    gambar: "/../asset/step/perkalian/step1.png",
                    suara : "../asset/audio/materi/perkalian/step1.mp4"
                },
                {
                    judul: "Langkah 2",
                    konten: "Untuk mengalikan bilangan campuran dan pecahan, pertama-tama jadikan bilangan campuran tersebut menjadi pecahan biasa.",
                    gambar: "/../asset/step/perkalian/step2.png",
                    suara : "../asset/audio/materi/perkalian/step2.mp4"
                },
                {
                    judul: "Langkah 3",
                    konten: "Untuk mengalikan pecahan, kalikan pembilang dan penyebutnya, lalu sederhanakan. Setelah itu, ubahlah menjadi bilangan campuran!",
                    gambar: "/../asset/step/perkalian/step3.png",
                    suara : "../asset/audio/materi/perkalian/step3.mp4"
                },
                {
                    judul: "Langkah 4",
                    konten: "Jawaban yang benar adalah C",
                    gambar: "/../asset/step/perkalian/step4.png",
                    suara : "../asset/audio/materi/perkalian/step4.mp4"
                },
            ],
        },
    ];

    const handleNext = () => {
        if (currentStepPerkalian < materiPerkalian[currentMateriIndex].stepsMateriPerkalian.length - 1) {
            setCurrentStepPerkalian(currentStepPerkalian + 1);
            setAudioSrcPerkalian(materiPerkalian[currentMateriIndex].stepsMateriPerkalian[currentStepPerkalian + 1].suara);
        } else {
            if (currentMateriIndex < materiPerkalian.length - 1) {
                setCurrentMateriIndex(currentMateriIndex + 1);
                setCurrentStepPerkalian(0);
                setAudioSrcPerkalian(materiPerkalian[currentMateriIndex + 1].stepsMateriPerkalian[0].suara);
            } else {
                navigate('/latihan_soal_perkalian');
            }
        }
    };

    const handlePrevious = () => {
        if (currentStepPerkalian > 0) {
            setCurrentStepPerkalian(currentStepPerkalian - 1);
            setAudioSrcPerkalian(materiPerkalian[currentMateriIndex].stepsMateriPerkalian[currentStepPerkalian - 1].suara);
        } else {
            if (currentMateriIndex > 0) {
                setCurrentMateriIndex(currentMateriIndex - 1);
                setCurrentStepPerkalian(materiPerkalian[currentMateriIndex - 1].stepsMateriPerkalian.length - 1);
                setAudioSrcPerkalian(materiPerkalian[currentMateriIndex].stepsMateriPerkalian[currentStepPerkalian].suara);
            }
        }
    };

    const handleStart = async () => {
        setshowStepsPerkalian(true);
        setAudioSrcPerkalian(materiPerkalian[currentMateriIndex].stepsMateriPerkalian[currentStepPerkalian].suara);
    };

    return (
        <section id='materi_posttest'>
            <Navbar />
            <div className='agenped font-[georgia]'>
                <div className="container mx-auto mt-10">
                    <div>
                        <div className='border-2 h-auto p-4 text-center'>
                            <p>{materiPerkalian[currentMateriIndex].question}</p>
                            <ul>
                                {materiPerkalian[currentMateriIndex].options.map((option) => (
                                    <li key={option.id} className='mt-3'>{`${option.id}. ${option.text}`}</li>
                                ))}
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

                        {showStepsPerkalian && materiPerkalian[currentMateriIndex].stepsMateriPerkalian && materiPerkalian[currentMateriIndex].stepsMateriPerkalian.length > 0 && (
                            <>
                                <h2 className="text-2xl font-bold mb-4 mt-6">
                                    {materiPerkalian[currentMateriIndex].stepsMateriPerkalian[currentStepPerkalian]?.judul}
                                </h2>
                                <p style={{ whiteSpace: "pre-line" }}>{materiPerkalian[currentMateriIndex].stepsMateriPerkalian[currentStepPerkalian]?.konten}</p>
                                <img src={materiPerkalian[currentMateriIndex].stepsMateriPerkalian[currentStepPerkalian]?.gambar} alt="Step" className='m-auto' />

                                <audio controls autoPlay src={audioSrcPerkalian} className='m-auto mt-2'/>

                                <div className="flex justify-between mt-4">
                                    {currentStepPerkalian > 0 && (
                                        <button
                                            className="btn"
                                            onClick={handlePrevious}
                                        >
                                            Kembali
                                        </button>
                                    )}
                                    {currentStepPerkalian === materiPerkalian[currentMateriIndex].stepsMateriPerkalian.length - 1 ? (
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
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Materi_perkalian;
