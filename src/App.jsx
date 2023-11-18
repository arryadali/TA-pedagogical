/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckUserExist } from "./helper/helper";

import Welcomepage from "./components/welcomepage";
import Loginpage from "./components/loginpage";
import Registrasi from "./components/registrasi";
import Dashboard from "./components/dashboard_nav/dashboard";
import Biodatasiswa from "./components/biodata_nav/biodatasiswa";

// Materi
import Materi from "./components/materi_nav/materi";
import Materi_belajar_posttest from "./components/materi_nav/materi_post_test/materi_belajar_posttest";

// Soal
import Soal from "./components/soal_nav/soal";
import Page_soal_posttest from "./components/soal_nav/soal_post_test/page_soal_posttest";
import Page_soal_pretest from "./components/soal_nav/soal_pre_test/page_soal_pretest";
import Soal_belajar_pretest from "./components/soal_nav/soal_pre_test/soal_belajar_pretest";
import Soal_belajar_posttest from "./components/soal_nav/soal_post_test/soal_belajar_posttest";

// Tambahan
import Result_posttest from "./components/soal_nav/soal_post_test/result_posttest";

import Quiz_setup_posttest from "./components/soal_nav/soal_post_test/quiz_setup_posttest";
import Latsol_materi_posttest from "./components/materi_nav/materi_post_test/latsol_materi_posttest";
import Page_materi from "./components/materi_nav/materi_post_test/page_materi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcomepage/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/registrasi" element={<Registrasi/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/biodatasiswa" element={<Biodatasiswa/>}/>

        {/* Materi */}
        <Route path="/materi" element={<Materi/>}/>
        <Route path="/materi_belajar_posttest" element={<Materi_belajar_posttest/>}/>
        <Route path="/page_materi" element={<Page_materi/>}/>

        {/* Soal */}
        <Route path="/soal" element={<Soal/>}/>
        <Route path="/page_soal_posttest" element={<Page_soal_posttest/>}/>
        <Route path="/page_soal_pretest" element={<Page_soal_pretest/>}/>
        <Route path="/soal_belajar_pretest" element={<Soal_belajar_pretest/>}/>
        <Route path="/latihan_soal_posttest" element={<Latsol_materi_posttest/>}/>


        {/* Check user Exist */}
        <Route path="/quiz_setup" element={<Quiz_setup_posttest/>}/>
        <Route path="/soal_belajar_posttest" element={<CheckUserExist><Soal_belajar_posttest /></CheckUserExist>} />
        <Route path="/result_posttest" element={<CheckUserExist><Result_posttest /></CheckUserExist>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
