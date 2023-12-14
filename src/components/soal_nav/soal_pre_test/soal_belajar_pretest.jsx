import React, {useState} from 'react'
import QuestionsPretest from '../../questions_pretest';

import { moveNextActionPretest, movePrevActionPretest } from '../../../redux/question_reducer_pretest';
import { PushAnswerPretest} from '../../../hooks/setResult'

import {useSelector, useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom';

const Soal_belajar_pretest = () => {

  // ====================KUIS NYA======================== //

  const [check, setChecked] = useState(undefined)

  const resultPretest = useSelector(state => state.resultPretest.resultPretest)
  const {queuePretest, tracePretest} = useSelector(state => state.questionsPretest)
  const dispatch = useDispatch()

  const onSelanjutnya = () => {
    if(tracePretest < queuePretest.length) {
      dispatch(moveNextActionPretest())

      if(resultPretest.length <= tracePretest) {
        dispatch(PushAnswerPretest(check))
      }
    }
    setChecked(undefined)
  }

  const onKembali = () => {
    if(tracePretest > 0) {
      dispatch(movePrevActionPretest())
    }
  }

  const onChecked = (check) => {
    setChecked(check)
  }

  if(resultPretest.length && resultPretest.length >= queuePretest.length) {
    return <Navigate to={'/result_pretest'} replace={true}></Navigate>
  }

  // ====================KUIS NYA======================== //

  return (
    <section id='soal_belajar_pretest'>
        <div className='container'>
          <div className='grid grid-cols-2 gap-10 w-[82%] m-auto mt-[39px]'>
      
              <div>
                <QuestionsPretest onChecked={onChecked}/>
                <div className='grid grid-cols-2'>
                  {tracePretest > 0 ? <button 
                  onClick={onKembali}
                  className='bg-[#1D809F] text-[1.2rem] rounded-[1rem] py-[16px] px-[27.2px]'>
                    Kembali
                  </button> : <div></div>}

                  <button 
                  onClick={onSelanjutnya}
                  className='bg-[#1D809F] text-[1.2rem] rounded-[1rem] py-[16px] px-[27.2px]'>
                    Selanjutnya
                  </button>

                </div>
              </div>

              <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
                  <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto'/>
              </div>
          </div> 
        </div> 
        
    </section>
  )
}

export default Soal_belajar_pretest
