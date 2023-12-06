/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckUserExist } from "./helper/helper";

import Welcomepage from "./components/welcomepage";
import Loginpage from "./components/loginpage";
import Registrasi from "./components/registrasi";
import Dashboard from "./components/dashboard_nav/dashboard";
import Profile from "./components/profile_nav/profile";

// Materi
import Materi from "./components/materi_nav/materi";
import Materi_perkalian from "./components/materi_nav/baca_materi/materi_perkalian";
import Materi_pembagian from "./components/materi_nav/baca_materi/materi_pembagian";
import Full_materi from "./components/materi_nav/baca_materi/full_materi";

// Latihan Soal
import Latsol_perkalian from "./components/materi_nav/latihan_soal/latsol_perkalian";
import Latsol_pembagian from "./components/materi_nav/latihan_soal/latsol_pembagian";

// Soal
import Soal from "./components/soal_nav/soal";
import Soal_belajar_pretest from "./components/soal_nav/soal_pre_test/soal_belajar_pretest";
import Soal_belajar_posttest from "./components/soal_nav/soal_post_test/soal_belajar_posttest";

// Tambahan
import Result_posttest from "./components/soal_nav/soal_post_test/result_posttest";
import Quiz_setup_posttest from "./components/soal_nav/soal_post_test/quiz_setup_posttest";
import Page_materi from "./components/materi_nav/baca_materi/page_materi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcomepage/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/registrasi" element={<Registrasi/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>


        {/* Materi */}
        <Route path="/materi" element={<Materi/>}/>
        <Route path="/page_materi" element={<Page_materi/>}/>
        <Route path="/materi_perkalian" element={<Materi_perkalian/>}/>
        <Route path="/materi_pembagian" element={<Materi_pembagian/>}/>
        <Route path="/full_materi" element={<Full_materi/>}/>

        {/* Latihan Soal */}
        <Route path="/latihan_soal_perkalian" element={<Latsol_perkalian/>}/>
        <Route path="/latihan_soal_pembagian" element={<Latsol_pembagian/>}/>

        {/* Soal */}
        <Route path="/soal" element={<Soal/>}/>
        <Route path="/soal_belajar_pretest" element={<Soal_belajar_pretest/>}/>
        
        {/* Check user Exist */}
        <Route path="/quiz_setup" element={<Quiz_setup_posttest/>}/>
        <Route path="/soal_belajar_posttest" element={<CheckUserExist><Soal_belajar_posttest /></CheckUserExist>} />
        <Route path="/result_posttest" element={<CheckUserExist><Result_posttest /></CheckUserExist>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
