import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../../../helper/helper';
import { useLocation } from 'react-router-dom';

// import action
import { resetAllAction } from '../../../redux/question_reducer_posttest';
import { resetResultAction } from '../../../redux/result_reducer_posttest';
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
    
  return (
    <section id='hasil'>
        <Navbar/>
        <div className='agenped'>
            <div>
                <h1 className='font-bold text-center mb-4'>HASIL BELAJAR</h1>

                <div className='flex justify-center flex-col border w-1/2 m-auto p-8 mb-4'>
                    <div className='flex justify-between'>
                        <span className='font-[16px]'>Nama</span>
                        <span className='font-bold'>{localStorage.getItem("NAMA")}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Kuis Poin : </span>
                        <span className='font-bold'>{totalPoints || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Pertanyaan : </span>
                        <span className='font-bold'>{queue.length || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Menjawab : </span>
                        <span className='font-bold'>{attempts || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Points : </span>
                        <span className='font-bold'>{earnPoints || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Hasil Kuis</span>
                        <span style={{color : `${flag ? "#00b058" : "#ff2a66"}`}} className='font-bold'>{flag ? "Passed" : "Failed"}</span>
                    </div>

                </div>

                <div className='text-center'>
                    <Link className='btn font-[georgia]' to={"/quiz_setup_posttest"} onClick={onRestart}>DONE</Link>
                </div>    
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
