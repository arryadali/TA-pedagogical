import React from 'react'
import { useState } from 'react';

const Coba = () => {
    const [text, setText] = useState('Halo nama saya Arrya');        
    const { speechSynthesis, SpeechSynthesisUtterance } = window;
      
    const speak = () => {
        if (speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
        } else {
        console.error('Browser tidak mendukung text-to-speech.');
        }
    };
        
  return (
    <div>
      <h1>Text-to-Speech Example</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Masukkan teks yang akan diucapkan..."
      />
      <button onClick={speak}>Mulai Membaca</button>
    </div>
  )
}

export default Coba;
