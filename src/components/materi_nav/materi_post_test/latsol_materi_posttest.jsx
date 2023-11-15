import React, {useState} from 'react'
import Navbar from '../../navbar';

const Latsol_materi_posttest = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [wrongAnswer, setWrongAnswer] = useState(null);

  const correctAnswer = 'B';

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setWrongAnswer(null);
  };

  const handleSubmit = () => {
    if (selectedAnswer === correctAnswer) {
      alert('Jawaban Anda benar!');
    } else {
      setWrongAnswer(selectedAnswer);
      alert('Jawaban Anda salah. Coba lagi.');
    }
   
  };
  
  return (
    <section id='materi_posttest'>
      <Navbar />
      <div className='agenped font-[georgia]'>
        <div className="container mx-auto p-4">
          <div className="bg-white p-6 rounded">
            <h1 className='font-bold text-center text-2xl mb-4'>Latihan Soal Perkalian</h1>
            <div className='border-2 h-auto p-4 text-center'>
              <p className='mb-4'>Jika setiap hari kita minum <sup>5</sup>/<sub>6</sub> liter susu, maka berapa liter susu yang diminum selama 3 hari?</p>
              <ul className='text-left text-sm'>

                <li className='mb-5'>
                  <label className={`${wrongAnswer === 'A' ? 'text-red-500' : ''}`}>
                    <input
                      type="radio"
                      name="answer"
                      value="A"
                      checked={selectedAnswer === 'A'}
                      onChange={() => handleAnswerSelect('A')}
                      className='mr-2'
                    />
                    A. <sup>8</sup>/<sub>6</sub> liter
                  </label>
                </li>

                <li className='mb-5'>
                  <label className={`${wrongAnswer === 'B' ? 'text-red-500' : ''}`}>
                    <input
                      type="radio"
                      name="answer"
                      value="B"
                      checked={selectedAnswer === 'B'}
                      onChange={() => handleAnswerSelect('B')}
                      className='mr-2'
                    />
                    B. <sup>15</sup>/<sub>6</sub> liter
                  </label>
                </li>

                <li className='mb-5'>
                  <label className={`${wrongAnswer === 'C' ? 'text-red-500' : ''}`}>
                    <input
                      type="radio"
                      name="answer"
                      value="C"
                      checked={selectedAnswer === 'C'}
                      onChange={() => handleAnswerSelect('C')}
                      className='mr-2'
                    />
                    C. <sup>2</sup>/<sub>6</sub> liter
                  </label>
                </li>

                <li className='mb-5'>
                <label className={`${wrongAnswer === 'D' ? 'text-red-500' : ''}`}>
                    <input
                      type="radio"
                      name="answer"
                      value="D"
                      checked={selectedAnswer === 'D'}
                      onChange={() => handleAnswerSelect('D')}
                      className='mr-2'
                    />
                    D. <sup>3</sup>/<sub>6</sub> liter
                  </label>
                </li>

              </ul>

              <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded' onClick={handleSubmit}>
                  Submit
              </button>

            </div>
          </div>
        </div>

        <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
          <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
          <div>
            <button>
              MULAI
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Latsol_materi_posttest;
