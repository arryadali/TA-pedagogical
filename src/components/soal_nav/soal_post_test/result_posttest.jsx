import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../../../helper/helper';
import Likert from 'react-likert-scale';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// import action
import { resetAllAction } from '../../../redux/question_reducer';
import { resetResultAction } from '../../../redux/result_reducer';
import { usePublishResult } from '../../../hooks/setResult';
import Navbar from '../../navbar';

const Result_posttest = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [showMessage, setShowMessage] = useState(true);

    const location = useLocation()
    const isResultPosttest = location.pathname === '/result_posttest';
    const [audio] = useState(new Audio("../asset/audio/materi/materi.mp4"));

    const playAudioResult = () => {
        if (isPlaying) {
          audio.pause();
          audio.currentTime = 0;
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    
    useEffect(() => {
    const timer = setTimeout(() => {
        setShowMessage(false);
    }, 6000);

    return () => clearTimeout(timer);
    }, []);

    const [showLikert, setShowLikert] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const dispatch = useDispatch();
    const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10);
    const flag = flagResult(totalPoints, earnPoints);


    // store user result
    usePublishResult({
        result,
        username: userId,
        attempts,
        points: earnPoints,
        achived: flag ? "Passed" : "Failed"
    });

    const onRestart = () => {
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    };

    const showLikertScale = () => {
        setShowLikert(true);
        setShowOverlay(true);
    };

    const handleOverlayClick = () => {
        if (showOverlay) {
            setShowOverlay(false);
            setShowLikert(false);
        }
    };

    const handleCloseClick = () => {
        setShowOverlay(false);
        setShowLikert(false);
    };

    const [likertResults, setLikertResults] = useState({
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0,
        question6: 0,
      });

    const handleLikertChange = (questionId, value) => {
    setLikertResults((prevResults) => ({
        ...prevResults,
        [questionId]: value,
    }));
    };

    const handleFinishClick = async () => {
        const flattenedResults = Object.entries(likertResults).map(([questionId, data]) => ({
            userId,
            questionId,
            value: data.value,
            text: data.text,
          }));
        
          console.log('Likert Results:', flattenedResults);
        
          try {
            await axios.post('http://localhost:5000/api/likert', flattenedResults);
        
            console.log('Data Likert Scale berhasil dikirim');
            handleCloseClick();
          } catch (error) {
            console.error('Error saat mengirim data Likert Scale:', error);
          }
    };

    const questionsLikert = [
        "Seberapa jauh kamu menguasai perkalian?",
        "Seberapa jauh kamu menguasai pembagian?",
        "Seberapa jauh kamu menguasai perkalian pecahan?",
        "Seberapa jauh kamu menguasai pembagian pecahan?",
        "Seberapa jelas penjelasan yang diberikan dalam materi pembelajaran ini?",
        "Sejauh mana materi pembelajaran ini dapat membantu Anda memahami konsep-konsep matematika dengan lebih baik?",
    ]

    
  return (
    <section id='hasil'>
        <Navbar/>
        <div className='agenped'>
            <div>
                <h1 className='font-bold text-center mb-4'>HASIL BELAJAR</h1>

                <div className='flex justify-center flex-col border w-2/5 m-auto p-8 mb-4'>
                    <div className='flex justify-between'>
                        <span className='font-[16px]'>Username</span>
                        <span className='font-bold'>Daily Tuition</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Quiz Point : </span>
                        <span className='font-bold'>{totalPoints || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Question : </span>
                        <span className='font-bold'>{queue.length || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Attempts : </span>
                        <span className='font-bold'>{attempts || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Earn Points : </span>
                        <span className='font-bold'>{earnPoints || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Quiz Result</span>
                        <span style={{color : `${flag ? "#00b058" : "#ff2a66"}`}} className='font-bold'>{flag ? "Passed" : "Failed"}</span>
                    </div>

                </div>

                <div className='text-center'>
                    <Link className='btn font-[georgia]' to={"/quiz_setup"} onClick={onRestart}>DONE</Link>
                    <button className='btn font-[georgia]' onClick={showLikertScale}>Likert Scale</button>
                </div>

                
                {showOverlay && (
                        <div className="overlay" onClick={handleOverlayClick}></div>
                    )}

                {showLikert && (
                    <div className='likert-popup'>
                    <h3 className='text-center'>Silahkan menilai kepuasan Anda mengenai Pembelajaran ini </h3>
            
                    <div className="grid">
                    {questionsLikert.map((question, index) => (
                        <div key={index}>
                        <p>{question}</p>
                        <Likert
                            id={`question${index + 1}`}
                            responses={[
                            { value: 1, text: "Sangat Buruk" },
                            { value: 2, text: "Buruk" },
                            { value: 5, text: "Netral" },
                            { value: 6, text: "Baik" },
                            { value: 7, text: "Sangat Baik" }
                            ]}
                            onChange={(value) => handleLikertChange(`question${index + 1}`, value)}
                        />
                        </div>
                    ))}
                    </div>
            
                    <button className='btn font-[georgia]' onClick={handleFinishClick}>Selesai</button>
                    <button className='btn font-[georgia]' onClick={handleCloseClick}>Tutup</button>
                </div>
                )}
                
            </div>

            <aside className='mt-12'>
                <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                    <img src={flag ? "../asset/agen/seneng.png" : "../asset/agen/sedih.png"} alt="" width={230} className='mx-auto' />
                    <div className='px-4 py-6 text-justify'>
                        {isResultPosttest && showMessage && (
                            flag ? (
                                <p className='font-[georgia]'>
                                    Wow kamu hebat! Kamu sudah lulus quiznya!
                                </p>
                            ) : (
                                <p className='font-[georgia]'>
                                    Jangan sedih ya dan tetap semangat belajar!
                                </p>
                            )
                        )}
                    </div>
                </div>

                <div className='text-center font-[georgia] mt-4'>
                    <p>Klik tombol dibawah ini untuk memakai suara!</p>
                    <button className='btn mt-4' onClick={playAudioResult}>
                    {isPlaying ? 'Hentikan' : 'Suara'}
                    </button>
                </div>
            </aside>
        </div>
    </section>
  )
}

export default Result_posttest;
