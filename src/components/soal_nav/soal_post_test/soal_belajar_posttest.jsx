import React, {useState} from 'react'
import Questions from '../../Questions';

import { moveNextAction, movePrevAction } from '../../../redux/question_reducer';
import {PushAnswer} from '../../../hooks/setResult'

import {useSelector, useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom';

const Soal_belajar_posttest = () => {

  // ====================KUIS NYA======================== //

  const [check, setChecked] = useState(undefined)

  const result = useSelector(state => state.result.result)
  const {queue, trace} = useSelector(state => state.questions)
  const dispatch = useDispatch()

  const onSelanjutnya = () => {
    if(trace < queue.length) {
      dispatch(moveNextAction())

      if(result.length <= trace) {
        dispatch(PushAnswer(check))
      }
    }
    setChecked(undefined)
  }

  const onKembali = () => {
    if(trace > 0) {
      dispatch(movePrevAction())
    }
  }

  const onChecked = (check) => {
    setChecked(check)
  }

  if(result.length && result.length >= queue.length) {
    return <Navigate to={'/result_posttest'} replace={true}></Navigate>
  }

  // ====================KUIS NYA======================== //

  return (
    <section id='soal_belajar_posttest'>
        <div className='container'>
          <div className='grid grid-cols-2 gap-10 w-[82%] m-auto mt-[39px]'>
      
              <div>
                <Questions onChecked={onChecked}/>
                <div className='grid grid-cols-2'>
                  {trace > 0 ? <button 
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

export default Soal_belajar_posttest
