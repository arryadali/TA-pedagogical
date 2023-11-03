import React, {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

// costum hook
import { useFetchQestion } from '../hooks/fetchQuestion'
import { updateResult } from '../hooks/setResult'


export default function Questions({onChecked}) {

    const [checked, setChecked] = useState(undefined)
    const {trace} = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)
    const [{isLoading, apiData, serverError}] = useFetchQestion()
    
    const questions = useSelector(state => state.questions.queue[state.questions.trace])

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(updateResult({trace, checked}))
    }, [checked])

    const onSelect = (i) => {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace, checked}))
    }

    if(isLoading) return <h3 className='font-light'>isLoading</h3>
    if(serverError) return <h3 className='font-light'>{serverError || "Unknown Error"}</h3>


  return (
    <section id='questions'>
        {/* Pertanyaannya */}
        <h2 className='font-[Georgia]'>{questions?.question}</h2>

        {/* Pilihan gandanya */}
        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i} className='border-b-2 border-solid font-[Georgia]'>
                        <input type="radio" 
                        value={false}
                        name='options'
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                        />

                        <label className='max-w-full p-[1%] hover:text-[#FFFFFF]' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`h-[25px] w-[25px] ${result[trace] === i ? 'checked':''}`}></div>
                    </li>
                ))
            }
        </ul>
    </section>
  )
}