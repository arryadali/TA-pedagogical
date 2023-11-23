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

    const correctAnswer = 'B';
    const maxWrongAttemptsBeforeHint = 1;
    const navigate = useNavigate();

    const handleAnswerSelect = (answer) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
            setWrongAnswer(null);
        }
    };

    const handleSubmit = () => {
        if (selectedAnswer === correctAnswer) {
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
        setShowHintImage(true);
    };

    const handleNextClick = () => {
        navigate('/materi_pembagian');
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
                                Jika setiap hari kita minum <sup>5</sup>/<sub>6</sub> liter susu, maka berapa liter susu yang diminum selama 3 hari?
                            </p>

                            <ul className='text-left text-sm'>
                                <li className='mb-5'>
                                    <label className={`${wrongAnswer === 'A' ? 'text-red-500' : ''} ${selectedAnswer === 'A' && isCorrect ? 'text-green-500' : ''}`}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value="A"
                                            checked={selectedAnswer === 'A'}
                                            onChange={() => handleAnswerSelect('A')}
                                            className='mr-2'
                                            disabled={isAnswered}
                                        />
                                        A. <sup>8</sup>/<sub>6</sub> liter
                                    </label>
                                </li>
                                <li className='mb-5'>
                                    <label className={`${wrongAnswer === 'B' ? 'text-red-500' : ''} ${selectedAnswer === 'B' && isCorrect ? 'text-green-500' : ''}`}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value="B"
                                            checked={selectedAnswer === 'B'}
                                            onChange={() => handleAnswerSelect('B')}
                                            className='mr-2'
                                            disabled={isAnswered}
                                        />
                                        B. <sup>15</sup>/<sub>6</sub> liter
                                    </label>
                                </li>
                                <li className='mb-5'>
                                    <label className={`${wrongAnswer === 'C' ? 'text-red-500' : ''} ${selectedAnswer === 'C' && isCorrect ? 'text-green-500' : ''}`}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value="C"
                                            checked={selectedAnswer === 'C'}
                                            onChange={() => handleAnswerSelect('C')}
                                            className='mr-2'
                                            disabled={isAnswered}
                                        />
                                        C. <sup>2</sup>/<sub>6</sub> liter
                                    </label>
                                </li>
                                <li className='mb-5'>
                                    <label className={`${wrongAnswer === 'D' ? 'text-red-500' : ''} ${selectedAnswer === 'D' && isCorrect ? 'text-green-500' : ''}`}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value="D"
                                            checked={selectedAnswer === 'D'}
                                            onChange={() => handleAnswerSelect('D')}
                                            className='mr-2'
                                            disabled={isAnswered}
                                        />
                                        D. <sup>3</sup>/<sub>6</sub> liter
                                    </label>
                                </li>
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
                                    Selanjutnya
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
                                    <img src="../asset/materi/hint/hint.png" alt="Hint" className='mx-auto' />
                                )}
                            </div>
                        )}
                        
                    </div>
                </div>

                <aside className='mt-12'>
                    <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
                        <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
                        <p>
                            {message && (
                                <div className='px-4 py-6 text-justify'>
                                    {message}
                                </div>
                            )}
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default LatsolPerkalian;
