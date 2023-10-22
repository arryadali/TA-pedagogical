/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcomepage from "./component/welcomepage";
import Loginpage from "./component/loginpage";
import Registrasi from "./component/registrasi";
import Dashboard from "./component/dashboard_nav/dashboard";
import Biodatasiswa from "./component/biodata_nav/biodatasiswa";
import Materi from "./component/materi_nav/materi";
import Soal from "./component/soal_nav/soal";
import Page_materi_posttest from "./component/materi_nav/materi_post_test/page_materi_posttest";
import Pretest from "./component/materi_nav/materi_pre_test/page_materi_pretest";
import Materi_belajar_posttest from "./component/materi_nav/materi_post_test/materi_belajar_posttest";
import Materi_belajar_pretest from "./component/materi_nav/materi_pre_test/materi_belajar_pretest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcomepage/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/registrasi" element={<Registrasi/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/biodatasiswa" element={<Biodatasiswa/>}/>
        <Route path="/materi" element={<Materi/>}/>
        <Route path="/soal" element={<Soal/>}/>
        <Route path="/posttest" element={<Page_materi_posttest/>}/>
        <Route path="/pretest" element={<Pretest/>}/>
        <Route path="/materi_belajar_posttest" element={<Materi_belajar_posttest/>}/>
        <Route path="/materi_belajar_pretest" element={<Materi_belajar_pretest/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
