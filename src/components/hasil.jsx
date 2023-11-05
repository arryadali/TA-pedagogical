import React from 'react'
import { Link } from 'react-router-dom';
import TabelHasil from './tabelHasil';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

// import action
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';


const Hasil = () => {

    const dispatch = useDispatch()
    const {questions : {queue, answers}, result : {result, userId}} = useSelector(state => state)

    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result)
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)

    // store user result
    usePublishResult({
        result, 
        username : userId, 
        attempts, 
        points : earnPoints, 
        achived : flag ? "Passed" : "Failed"
    })

    const onRestart = () => {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
    
  return (
    <section id='hasil'>
        <div className='container'>
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
            </div>

            <div className='container mt-[5%]'>
                {/* Tabel Hasil */}
                <TabelHasil></TabelHasil>
            </div>
        </div>
    </section>
  )
}

export default Hasil;
