import React, {useState} from 'react'
import Navbar from '../../navbar'
import axios from 'axios';
import { useEffect } from 'react';


const Materi_belajar_posttest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [materi, setMateri] = useState([]);
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/materi')
        .then(response => {
          setMateri(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}, []);

  const handleNext = () => {
    if (currentStep < materi.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSteps(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStart = () => {
    setShowSteps(true);
  };

  

  return (
    <section id='materi_posttest'>
        <Navbar/>
        <div className='agenped font-[georgia]'>
          <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded">
              <div className='border-2 h-auto p-4 text-center'>
                <p>Nilai dari <sup>1</sup>/<sub>2</sub> x 3 adalah :</p>
                <ul>
                  <li>A. 1 <sup>2</sup>/<sub>2</sub></li>
                  <li>B. <sup>2</sup>/<sub>3</sub></li>
                  <li>C. <sup>3</sup>/<sub>2</sub></li>
                  <li>D. 1 <sup>2</sup>/<sub>1</sub></li>
                </ul>
              </div>

              {!showSteps && (
                <button
                  className="btn mt-12"
                  onClick={handleStart}
                >
                  Start Step
                </button>
              )}

              {showSteps && (
                <>
                  <h2 className="text-2xl font-bold mb-4 mt-12">
                    {materi[currentStep]?.judul}
                  </h2>
                  <p>{materi[currentStep]?.konten}</p>
                  <div className="flex justify-between mt-4">
                    {currentStep > 0 && (
                      <button
                        className="btn"
                        onClick={handlePrevious}
                      >
                        Previous
                      </button>
                    )}
                    <button
                      className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                      onClick={handleNext}
                      disabled={currentStep === materi.length - 1}
                    >
                      {currentStep === materi.length - 1 ? "Selesai" : "Next"}
                    </button>
                  </div>
                </>
              )}

            </div>
          </div>

          <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden'>
            <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto'/>
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

export default Materi_belajar_posttest
