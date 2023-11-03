import React, {useState, useEffect} from 'react'
import Navbar from '../../navbar'
import Questions from '../../Questions';

import { moveNextAction, movePrevAction } from '../../../redux/question_reducer';
import {PushAnswer} from '../../../hooks/setResult'

// Redux store import
import {useSelector, useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom';

const Soal_belajar_posttest = () => {

  // ====================KUIS NYA======================== //

  const [check, setChecked] = useState(undefined)

  const result = useSelector(state => state.result.result)
  const {queue, trace} = useSelector(state => state.questions)
  const dispatch = useDispatch()

  // next button even handler
  const onSelanjutnya = () => {
    console.log('On next click')
    if(trace < queue.length) {
      dispatch(moveNextAction())

      if(result.length <= trace) {
        dispatch(PushAnswer(check))
      }
    }

    // reset the value
    setChecked(undefined)
  }

  // prev button even handler
  const onKembali = () => {
    if(trace > 0) {
      dispatch(movePrevAction())
    }
  }

  const onChecked = (check) => {
    console.log(check)
    setChecked(check)
  }

  // Finished exam after the last question
  if(result.length && result.length >= queue.length) {
    return <Navigate to={'/hasil'} replace={true}></Navigate>
  }

  // ====================KUIS NYA======================== //



  return (
    <section id='soal_belajar_posttest'>
        <Navbar/>

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
              {/* <div>
                  <img src="../asset/materi/pecahan.png" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, dignissimos repudiandae sunt cumque nobis facere ut fuga, ducimus unde asperiores. Tenetur voluptates excepturi doloremque sequi, minima veniam magnam labore.</p>
              </div> */}

              <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
                  <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto'/>
                  {/* <div>
                    <button onClick={handleMulaiClick}>MULAI</button>
                    {showText && <div className=''>AYOO SEMANGAT MENGERJAKANNYA</div>}
                  </div> */}
              </div>
          </div> 
        </div> 
        
    </section>
  )
}

export default Soal_belajar_posttest
