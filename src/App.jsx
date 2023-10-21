import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcomepage from "./component/welcomepage";
import Loginpage from "./component/loginpage";
import Registrasi from "./component/registrasi";
import Home from "./component/home";
import Biodatasiswa from "./component/biodatasiswa";
import Materi from "./component/materi";
import Soal from "./component/soal";
import Posttest from "./component/posttest";
import Pretest from "./component/pretest";
import Bangunruang from "./component/bangunruang";

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
        <Route path="/posttest" element={<Posttest/>}/>
        <Route path="/pretest" element={<Pretest/>}/>
        <Route path="/bangunruang" element={<Bangunruang/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
