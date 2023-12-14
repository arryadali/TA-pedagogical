import React, { useState } from 'react';
import Navbar from '../../navbar';
import { useNavigate } from 'react-router-dom';

const LatsolPembagian = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [wrongAnswer, setWrongAnswer] = useState(null);
    const [hintCount, setHintCount] = useState(0);
    const [showHintButton, setShowHintButton] = useState(false);
    const [message, setMessage] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [showHintImage, setShowHintImage] = useState(false);
    const [stepsHint, setstepsHint] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hintClicked, setHintClicked] = useState(false);
    const [currentHintIndex, setCurrentHintIndex] = useState(0);

    const maxWrongAttemptsBeforeHint = 1;
    const navigate = useNavigate();

    const questionsPembagian = [
        {
            question: "1. Seorang anak memiliki 3/4 liter susu. Jika dia membaginya menjadi 2 gelas yang sama, berapa liter susu yang ada di setiap gelas?",
            options: [
                {
                    id: 'A',
                    text: "2/3 liter",
                },
                {
                    id: 'B',
                    text: "6/4 liter",
                },
                {
                    id: 'C',
                    text: "3/2 liter",
                },
                {
                    id: 'D',
                    text: "3/8 liter",
                },
            ],
            correctAnswer: 'D',
            stepsHint : [
                {
                    judul : "Langkah 1",
                    text : `Seorang anak memiliki 3/4 liter susu. Dia akan membagikannya ke 2 gelas yang sama
                    3/4 : 2 = ... ?
                    `,
                    suara: "../asset/audio/materi/pembagian/hint/hint1.1.mp4",
                },
                {
                    judul : "Langkah 2",
                    text: `Tukar lah pecahan tersebut. Menjadi
                    3/4 x 1/2 = ... ?
                    `,
                    suara: "../asset/audio/materi/pembagian/hint/hint1.2.mp4",
                },
                {
                    judul : "Langkah 3",
                    text: `Hasilnya adalah ... ?`,
                    suara: "../asset/audio/materi/pembagian/hint/hint1.3.mp4",
                },
            ]
        },
        {
            question: "2. Dua teman, Aji dan Budi, memiliki 2 2/3 kantong permen. Jika mereka membagi rata permen tersebut, berapa banyak permen yang akan dimiliki oleh masing-masing teman?",
            options: [
                {
                    id: 'A',
                    text: '5/3 permen',
                },
                {
                    id: 'B',
                    text: '16/3 permen',
                },
                {
                    id: 'C',
                    text: '3/4 permen',
                },
                {
                    id: 'D',
                    text: '4/3 permen',
                },
            ],
            correctAnswer: 'D',
            stepsHint : [
                {
                    judul : "Langkah 1",
                    text : `Permen 2 2/3, ingin dibagikan sama rata kepada Aji dan Budi. Berapa yang dimiliki masing-masing? Ubahlah ke pecahan biasa terlebih dahulu
                    2 2/3 = ... ?
                    `,
                    suara: "../asset/audio/materi/pembagian/hint/hint2.1.mp4",
                },
                {
                    judul : "Langkah 2",
                    text: `Pertama-tama ubahlah pecahan campuran ke pecahan biasa terlebih dahulu
                    1 3/7 = … ?
                    `,
                    suara: "../asset/audio/materi/pembagian/hint/hint2.2.mp4",
                },
                {
                    judul : "Langkah 3",
                    text: `Lalu kalikan pecahan tersebut
                    10/7 x 2 = … ?
                    `,
                    suara: "../asset/audio/materi/pembagian/hint/hint2.3.mp4",
                },
                {
                    judul : "Langkah 4",
                    text: `Dan yang terakhir ubahlah kepecahan campuran.
                    20/7 = 2 6/7 km
                    `,
                    suara: "../asset/audio/materi/pembagian/hint/hint2.4.mp4",
                },
            ]
        },
        {
            question: "3. Alya memiliki sepotong tali yang panjangnya 2 1/3  meter, dan Rian memiliki sepotong tali yang panjangnya 4 2/5  meter. Mereka ingin menggabungkan kedua potongan tali tersebut menjadi satu. Berapa panjang total tali yang dimiliki Alya dan Rian?",
            options: [
                {
                    id: 'A',
                    text: '8/3 meter',
                },
                {
                    id: 'B',
                    text: '12/5 meter',
                },
                {
                    id: 'C',
                    text: '14/5 meter',
                },
                {
                    id: 'D',
                    text: '10/3 meter',
                },
            ],
            correctAnswer: 'A',
            stepsHint : [
                {
                    judul : "Langkah 1",
                    text : `Ubahlah kedua bilangan tersebut ke bilangan pecahan biasa
                    2 3/2 = … ? dan 6 2/1 = … ?

                    `,
                    suara: "/../asset/audio/materi/perkalian/hint/hintstep1.mp4",
                },
                {
                    judul : "Langkah 2",
                    text: `Setelah itu, kalikan kedua bilangan tersebut
                    7/2 x 8 = … ?
                    `,
                    suara: "/../asset/audio/materi/perkalian/hint/hintstep2.mp4",
                },
                {
                    judul : "Langkah 3",
                    text: "Apakah kamu sudah mengetahui jawabannya?",
                    suara: "/../asset/audio/materi/perkalian/hint/hintstep3.mp4",
                },
            ]
        },
    ];

    

    const currentQuestionData = questionsPembagian[currentQuestion - 1];

    const playAudioMateri = () => {
        const audioPath = currentQuestionData.suara;
        const audio = new Audio(audioPath);
    
        if (isPlaying) {
          audio.pause();
          audio.currentTime = 0;
        } else {
          audio.play();
        }
    
        setIsPlaying(!isPlaying);
    };

    const handleAnswerSelect = (answer) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
            setWrongAnswer(null);
        }
    };

    const handleSubmit = () => {
        if (selectedAnswer === currentQuestionData.correctAnswer) {
            setMessage("Wow kamu melakukannya dengan baik!");
            setShowHintButton(false);
            setShowHintImage(false);
            setIsCorrect(true);
            setIsAnswered(true);

            setTimeout(() => {
                setMessage(null);
                setIsCorrect(false);
            }, 6000);
        } else {
            setWrongAnswer(selectedAnswer);
            setHintCount(hintCount + 1);
            if (hintCount === maxWrongAttemptsBeforeHint - 1) {
                setShowHintButton(true);
                setMessage("Hmm… Sepertinya kita harus coba lagi. Kamu bisa gunakan tombol hint untuk bantuan. Semangat ya!");

                setTimeout(() => {
                    setMessage(null);
                },6000);
            } else {
                setMessage(null);
            }
        }
    };

    const handleNext = () => {
        if (currentHintIndex < currentQuestionData.stepsHint.length - 1) { // Menggunakan currentQuestionData
            setCurrentHintIndex(currentHintIndex + 1);
        }
    };

    const handleSelesai = () => {
        setShowHintImage(false);
    }

    const handlePrevious = () => {
        if (currentHintIndex > 0) {
            setCurrentHintIndex(currentHintIndex - 1);
        }
    };

    const audioSrcPerkalian = (() => {
        if (stepsHint && stepsHint[currentHintIndex]) {
            return stepsHint[currentHintIndex].suara;
        }
        return "";
    })();

    const handleHintClick = () => {
        const currentQuestionData = questionsPembagian[currentQuestion - 1];
        setShowHintImage(true);
        setstepsHint(currentQuestionData.stepsHint);
        setHintClicked(true);
        setCurrentHintIndex(0);
    };

    const handleNextClick = () => {
        if (currentQuestion < questionsPembagian.length) {
            setCurrentQuestion(currentQuestion + 1);
            resetState();
        } else {
            navigate('/materi');
        }
    };

    const resetState = () => {
        setSelectedAnswer(null);
        setWrongAnswer(null);
        setHintCount(0);
        setShowHintButton(false);
        setShowHintImage(false);
        setMessage(null);
        setIsCorrect(false);
        setIsAnswered(false);
        setstepsHint(null);
        setHintClicked(false)
    };

    return (
        <section id='materi_posttest'>
            <Navbar />
            <div className='agenped font-[georgia] overflow-hidden'>
                <div className="container mx-auto p-4">
                    <div className="bg-white p-5 rounded">
                        <h1 className='font-bold text-center text-2xl mb-4'>Latihan Soal Pembagian</h1>
                        <div className='border-2 h-auto p-4 text-center'>
                            <p className='mb-4'>
                                {currentQuestionData.question}
                            </p>

                            <ul className='text-left text-sm'>
                                {currentQuestionData.options.map((option) => (
                                    <li key={option.id} className='mb-5'>
                                        <label className={`${wrongAnswer === option.id ? 'text-red-500' : ''} ${selectedAnswer === option.id && isCorrect ? 'text-green-500' : ''}`}>
                                            <input
                                                type="radio"
                                                name="answer"
                                                value={option.id}
                                                checked={selectedAnswer === option.id}
                                                onChange={() => handleAnswerSelect(option.id)}
                                                className='mr-2'
                                                disabled={isAnswered}
                                            />
                                            {option.text}
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            {!isAnswered ? (
                                <button
                                    className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'
                                    onClick={handleSubmit}
                                    disabled={selectedAnswer === null}
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'
                                    onClick={handleNextClick}
                                >
                                    {currentQuestion < questionsPembagian.length ? 'Selanjutnya' : 'Selesai'}
                                </button>
                            )}

                            {showHintButton && (
                                <button
                                className='ml-4'
                                onClick={handleHintClick}
                                disabled={hintCount < maxWrongAttemptsBeforeHint}
                            >
                                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 20">
                                    <path d="M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7Zm0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2Z"/>
                                </svg>
                            </button>
                            )}

                        </div>

                        {showHintImage && (
                        <div className='mt-4'>
                            {stepsHint && (
                                <>
                                    <h1 className='text-2xl font-bold mb-4 mt-6'>{stepsHint[currentHintIndex].judul}</h1>
                                    <p style={{ whiteSpace: "pre-line" }}>
                                        {stepsHint[currentHintIndex].text}
                                    </p>
                                    <audio controls autoPlay src={audioSrcPerkalian} className='m-auto mt-2'/>
                                    <div className='flex justify-between'>
                                        {currentHintIndex > 0 && (
                                            <button
                                                className='btn'
                                                onClick={handlePrevious}
                                                disabled={currentHintIndex === 0}
                                            >
                                                Kembali
                                            </button>
                                        )}
                                        {currentHintIndex === stepsHint.length - 1 ? (
                                            <button
                                            className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                                            onClick={handleSelesai}
                                            disabled={currentHintIndex === stepsHint.length - 1}
                                        >
                                            Selesai
                                        </button>
                                    ) : (
                                        <button
                                            className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                                            onClick={handleNext}
                                            disabled={currentHintIndex === stepsHint.length - 1}
                                        >
                                            Selanjutnya
                                        </button>
                                        )}

                                        
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    </div>
                </div>

                <aside className='mt-12'>
                    <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                        <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
                        <p>
                            {message && (
                                <div className='px-4 py-6 text-justify'>
                                    {message}
                                    
                                </div>
                            )}
                        </p>
                    </div>

                    {hintClicked && (
                        <div className='text-center font-[georgia] mt-4'>
                            <p>Klik tombol dibawah ini untuk memakai suara!</p>
                            <button className='btn mt-4' onClick={playAudioMateri}>
                                {isPlaying ? 'Hentikan' : 'Suara'}
                            </button>
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
}

export default LatsolPembagian;
