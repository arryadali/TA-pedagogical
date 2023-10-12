import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Welcomepage from "./component/welcomepage";
import Loginpage from "./component/loginpage";
import Registrasi from "./component/registrasi";
import Home from "./component/home";
import Biodatasiswa from "./component/biodatasiswa";
import Materi from "./component/materi";
import Soal from "./component/soal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcomepage/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/registrasi" element={<Registrasi/>}/>
        <Route path="/homepage" element={<Home/>}/>
        <Route path="/biodatasiswa" element={<Biodatasiswa/>}/>
        <Route path="/materi" element={<Materi/>}/>
        <Route path="/soal" element={<Soal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
