import React, {useState} from 'react'
import Navbar from '../../navbar'
import { useNavigate } from 'react-router-dom';

const Latsol_pembagian = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [wrongAnswer, setWrongAnswer] = useState(null);
    const [hintCount, setHintCount] = useState(0);
    const [showHintButton, setShowHintButton] = useState(false);
    const [showHintImage, setShowHintImage] = useState(false);
    const [message, setMessage] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [hintImagePembagian, setHintImagePembagian] = useState(null);

    const maxWrongAttemptsBeforeHint = 1;
    const navigate = useNavigate();

    const questionsPembagian = [
        {
            question: "1. Seorang anak memiliki 3/4 liter susu. Jika dia membaginya menjadi 2 gelas yang sama, berapa liter susu yang ada di setiap gelas?",
            hintImagePembagian: "../asset/materi/hint/pembagian/hint1.png",
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
        },
        {
            question: "2. Dua teman, Aji dan Budi, memiliki 2 2/3 kantong permen. Jika mereka membagi rata permen tersebut, berapa banyak permen yang akan dimiliki oleh masing-masing teman?",
            hintImagePembagian: "../asset/materi/hint/pembagian/hint2.png",
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
        },
        {
            question: "3. Alya memiliki sepotong tali yang panjangnya 2 1/3  meter, dan Rian memiliki sepotong tali yang panjangnya 4 2/5  meter. Mereka ingin menggabungkan kedua potongan tali tersebut menjadi satu. Berapa panjang total tali yang dimiliki Alya dan Rian?",
            hintImagePembagian: "../asset/materi/hint/pembagian/hint3.png",
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

    const currentQuestionDataPembagian = questionsPembagian[currentQuestion - 1];

    const handleAnswerSelect = (answer) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
            setWrongAnswer(null);
        }
    };

    const handleSubmit = () => {
        if (selectedAnswer === currentQuestionDataPembagian.correctAnswer) {
            setMessage("Wow kamu melakukannya dengan baik!!!");
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
                setMessage("Hmm… Sepertinya kita harus coba lagi. Kamu bisa gunakan tombol hint dibawah.");

                setTimeout(() => {
                    setMessage(null);
                },6000);
            } else {
                setMessage(null);
            }
        }
    };

    const handleHintClick = () => {
        const currentQuestionData = questionsPembagian[currentQuestion - 1];
        setShowHintImage(true);
        setHintImagePembagian(currentQuestionData.hintImagePembagian);
    };

    const handleNextClick = () => {
        if (currentQuestion < questionsPembagian.length) {
            setCurrentQuestion(currentQuestion + 1);
            resetState();
        } else {
            navigate('/soal');
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
        setHintImagePembagian(null);
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
                                Jika setiap hari kita minum <sup>5</sup>/<sub>6</sub> liter susu, maka berapa liter susu yang diminum selama 3 hari?
                            </p>

                            <ul className='text-left text-sm'>
                                {currentQuestionDataPembagian.options.map((option) => (
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
                                    <img src={hintImagePembagian} alt="Hint" className='mx-auto' />
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
                </aside>
            </div>
        </section>
  )
}

export default Latsol_pembagian
