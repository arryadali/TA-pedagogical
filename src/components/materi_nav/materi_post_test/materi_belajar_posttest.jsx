import React, { useState, useEffect } from 'react';
import Navbar from '../../navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Materi_belajar_posttest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [materi, setMateri] = useState([]);
  const [showSteps, setShowSteps] = useState(false);
  const navigate = useNavigate()
  const [audio] = useState(new Audio());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/materi');
        console.log(response.data);
  
        if (response.data && response.data.length > 0) {
          setMateri(response.data[0]?.materi || []);
          setShowSteps(false);
        } else {
          console.error('Invalid response format:', response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();


  }, []);
  
  
  const handleNext = () => {
    if (currentStep < materi.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/latihan_soal_posttest');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const speakStep = (stepIndex) => {
    if ('speechSynthesis' in window && stepIndex < materi.length) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(materi[stepIndex]?.konten);

      synthesis.speak(utterance);

      utterance.onend = () => {
        speakStep(stepIndex + 1);
      };
    } else {
      console.error('Web Speech API is not supported in this browser or step index is out of bounds.');
    }
  }

  const handleStart = async () => {
    setShowSteps(true);

    // Start speaking from the first step
    speakStep(0);
  };

  return (
    <section id='materi_posttest'>
      <Navbar />
      <div className='agenped font-[georgia]'>
        <div className="container mx-auto p-4">
          <div className="bg-white p-6 rounded">
            <div className='border-2 h-auto p-4 text-center'>
              <p>Lisa mengikuti resep kue yang jumlah gulanya dibutuhkan <sup>3</sup>/<sub>4</sub> jumlah tepung yang dibutuhkan. <br />Jika Lisa menggunakan 2 <sup>1</sup>/<sub>3</sub> cangkir tepung. <br />Berapa cangkir gula yang dibutuhkan Lisa untuk membuat kuenya?</p>
              <ul>
                <li>A. 1 <sup>7</sup>/<sub>12</sub></li>
                <li>B. 3 <sup>1</sup>/<sub>9</sub></li>
                <li>C. 1<sup>3</sup>/<sub>4</sub></li>
                <li>D. 3<sup>1</sup>/<sub>12</sub></li>
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

            {showSteps && materi && materi.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-4 mt-12">
                  {materi[currentStep]?.judul}
                </h2>
                <p style={{ whiteSpace: "pre-line" }}>{materi[currentStep]?.konten}</p>
                <div className="flex justify-between mt-4">
                  {currentStep > 0 && (
                    <button
                      className="btn"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                  )}
                  {currentStep === materi.length - 1 ? (
                    <button
                      className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                      onClick={handleNext}
                      disabled={!showSteps}
                    >
                      Selesai
                    </button>
                  ) : (
                    <button
                      className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                      onClick={handleNext}
                      disabled={!showSteps}
                    >
                      Next
                    </button>
                  )}
                </div>
              </>
            )}

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

export default Materi_belajar_posttest;
