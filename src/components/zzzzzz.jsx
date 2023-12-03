import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../../../helper/helper';
import Likert from 'react-likert-scale';

// import action
import { resetAllAction } from '../../../redux/question_reducer';
import { resetResultAction } from '../../../redux/result_reducer';
import { usePublishResult } from '../../../hooks/setResult';
import Navbar from '../../navbar';

const Result_posttest = () => {

    const refLikert = useRef(null);

    const [showLikert, setShowLikert] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [chosen, setChosen] = useState(null)

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

    const likertOptions = {
        questions: [
            {
                id: 1,
                question: "Seberapa jauh kamu menguasai perkalian?",
                responses: [
                    { value: 1, text: "Sangat Buruk" },
                    { value: 2, text: "Buruk" },
                    { value: 3, text: "Netral", checked: true },
                    { value: 4, text: "Baik" },
                    { value: 5, text: "Sangat Baik" }
                ]
            },
            {
                id: 2,
                question: "Seberapa jauh kamu menguasai pembagian?",
                responses: [
                    { value: 1, text: "Sangat Buruk" },
                    { value: 2, text: "Buruk" },
                    { value: 3, text: "Netral", checked: true },
                    { value: 4, text: "Baik" },
                    { value: 5, text: "Sangat Baik" }
                ]
            },
            {
                id: 3,
                question: "Seberapa jauh kamu menguasai perkalian pecahan?",
                responses: [
                    { value: 1, text: "Sangat Buruk" },
                    { value: 2, text: "Buruk" },
                    { value: 3, text: "Netral", checked: true },
                    { value: 4, text: "Baik" },
                    { value: 5, text: "Sangat Baik" }
                ]
            },
            {
                id: 4,
                question: "Seberapa jauh kamu menguasai perkalian pecahan?",
                responses: [
                    { value: 1, text: "Sangat Buruk" },
                    { value: 2, text: "Buruk" },
                    { value: 3, text: "Netral", checked: true },
                    { value: 4, text: "Baik" },
                    { value: 5, text: "Sangat Baik" }
                ]
            },
            {
                id: 5,
                question: "Seberapa jelas penjelasan yang diberikan dalam materi pembelajaran ini?",
                responses: [
                    { value: 1, text: "Sangat Buruk" },
                    { value: 2, text: "Buruk" },
                    { value: 3, text: "Netral", checked: true },
                    { value: 4, text: "Baik" },
                    { value: 5, text: "Sangat Baik" }
                ]
            },
            {
                id: 6,
                question: "Sejauh mana materi pembelajaran ini dapat membantu Anda memahami konsep-konsep matematika dengan lebih baik?",
                responses: [
                    { value: 1, text: "Sangat Buruk" },
                    { value: 2, text: "Buruk" },
                    { value: 3, text: "Netral", checked: true },
                    { value: 4, text: "Baik" },
                    { value: 5, text: "Sangat Baik" }
                ]
            },
        ]
    };

    const onChange = (chosen) => {
        const content = (
          <span>
            You chose:{" "}
            <strong>
              {chosen?.value}—{chosen?.text}
            </strong>
          </span>
        );
        setChosen(content);
      };
    
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
                    <h3 className='text-center'>Umpan Balik terhadap Materi Pembelajaran</h3>
            
                    {likertOptions.questions.map((question) => (
                    <div key={question.id}>
                        <p>{question.question}</p>
                        <Likert
                            responses={question.responses}
                            onChange={(chosen) => onChange(chosen, question.id)}
                            ref={refLikert}
                            className="withBackground"
                        />
                    </div>
                ))}
                    <p style={{ textAlign: "center" }}>{chosen}</p>
            
                    <button className='btn font-[georgia]'>DONE</button>
                    <button className='btn font-[georgia]' onClick={handleCloseClick}>CLOSE</button>
                </div>
                )}
                
            </div>

            {/* <aside className='mt-12'>
                <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                    <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
                    <div className='px-4 py-6 text-justify'>
                    {isBacaSoal && showMessage ? (
                        <p className='font-[georgia]'>
                        Disini kita akan mengerjakan quiz. Semangat mengerjakan ya!!!
                        </p>
                    ) : null}
                    </div>
                </div>

                <div className='text-center font-[georgia] mt-4'>
                    <p>Klik tombol dibawah ini untuk memakai suara!</p>
                    <button className='btn mt-4' onClick={playAudioSoal}>
                    {isPlaying ? 'Hentikan' : 'Suara'}
                    </button>
                </div>
            </aside> */}
        </div>
    </section>
  )
}

export default Result_posttest;
