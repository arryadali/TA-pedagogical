import React, { useState } from 'react';
import Navbar from '../../navbar';
import { useNavigate } from 'react-router-dom';

const LatsolPerkalian = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [wrongAnswer, setWrongAnswer] = useState(null);
    const [hintCount, setHintCount] = useState(0);
    const [showHintButton, setShowHintButton] = useState(false);
    const [showHintImage, setShowHintImage] = useState(false);
    const [message, setMessage] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [hintImagePerkalian, setHintImagePerkalian] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hintClicked, setHintClicked] = useState(false);

    const maxWrongAttemptsBeforeHint = 1;
    const navigate = useNavigate();

    const questionsPerkalian = [
        {
            question: "1. Jika setiap hari kita minum 5/6 liter susu, maka berapa liter susu yang diminum selama 3 hari?",
            hintImagePerkalian: "../asset/materi/hint/perkalian/hint1.png",
            suara: "../asset/audio/materi/materi.mp4",
            options: [
                {
                    id: 'A',
                    text: "8/6 liter",
                },
                {
                    id: 'B',
                    text: "15/6 liter",
                },
                {
                    id: 'C',
                    text: "2/6 liter",
                },
                {
                    id: 'D',
                    text: "3/6 liter",
                },
            ],
            correctAnswer: 'B',
        },
        {
            question: "2. Seorang petani memiliki ladang sepanjang 1 3/7 kilometer. Jika petani tersebut ingin membangun pagar sepanjang dua kali panjang ladangnya, berapa panjang total pagar yang akan dibangun petani tersebut?",
            hintImagePerkalian: "../asset/materi/hint/perkalian/hint2.png",
            suara: "/../asset/audio/materi/perkalian/hint/hintstep2.mp4",
            options: [
                {
                    id: 'A',
                    text: '1 1/7 km',
                },
                {
                    id: 'B',
                    text: '1 4/7 km',
                },
                {
                    id: 'C',
                    text: '2 6/7 km',
                },
                {
                    id: 'D',
                    text: '3 5/7 km',
                },
            ],
            correctAnswer: 'C',
        },
        {
            question: "3. Alya memiliki sepotong tali yang panjangnya 2 1/3  meter, dan Rian memiliki sepotong tali yang panjangnya 4 2/5  meter. Mereka ingin menggabungkan kedua potongan tali tersebut menjadi satu. Berapa panjang total tali yang dimiliki Alya dan Rian?",
            hintImagePerkalian: "../asset/materi/hint/perkalian/hint3.png",
            suara: "/../asset/audio/materi/perkalian/hint/hintstep3.mp4",
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
        },
    ];

    const currentQuestionData = questionsPerkalian[currentQuestion - 1];

    const playAudioMateri = () => {
        const audioPath = currentQuestion.suara;
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

    const handleHintClick = () => {
        const currentQuestionData = questionsPerkalian[currentQuestion - 1];
        setShowHintImage(true);
        setHintImagePerkalian(currentQuestionData.hintImagePerkalian);
        setHintClicked(true);
    };

    const handleNextClick = () => {
        if (currentQuestion < questionsPerkalian.length) {
            setCurrentQuestion(currentQuestion + 1);
            resetState();
        } else {
            navigate('/materi_pembagian');
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
        setHintImagePerkalian(null);
        setHintClicked(false)
    };

    return (
        <section id='materi_posttest'>
            <Navbar />
            <div className='agenped font-[georgia] overflow-hidden'>
                <div className="container mx-auto p-4">
                    <div className="bg-white p-5 rounded">
                        <h1 className='font-bold text-center text-2xl mb-4'>Latihan Soal Perkalian</h1>
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
                                    {currentQuestion < questionsPerkalian.length ? 'Selanjutnya' : 'Selesai'}
                                </button>
                            )}

                            {showHintButton && (
                                <button
                                    className='ml-4 underline'
                                    onClick={handleHintClick}
                                    disabled={hintCount < maxWrongAttemptsBeforeHint}
                                >
                                    Hint!
                                </button>
                            )}

                        </div>

                        {showHintImage && (
                            <div className='mt-4'>
                                {showHintImage && (
                                    <img src={hintImagePerkalian} alt="Hint" className='mx-auto' />
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

export default LatsolPerkalian;
