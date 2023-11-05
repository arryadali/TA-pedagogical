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
import Page_materi_posttest from "./components/materi_nav/materi_post_test/page_materi_posttest";
import Page_materi_pretest from "./components/materi_nav/materi_pre_test/page_materi_pretest";
import Materi_belajar_posttest from "./components/materi_nav/materi_post_test/materi_belajar_posttest";
import Materi_belajar_pretest from "./components/materi_nav/materi_pre_test/materi_belajar_pretest";

// Soal
import Soal from "./components/soal_nav/soal";
import Page_soal_posttest from "./components/soal_nav/soal_post_test/page_soal_posttest";
import Page_soal_pretest from "./components/soal_nav/soal_pre_test/page_soal_pretest";
import Soal_belajar_pretest from "./components/soal_nav/soal_pre_test/soal_belajar_pretest";
import Soal_belajar_posttest from "./components/soal_nav/soal_post_test/soal_belajar_posttest";

// Tambahan
import Hasil from "./components/hasil";
import Quiz_setup_posttest from "./components/soal_nav/soal_post_test/quiz_setup_posttest";

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
        <Route path="/page_materi_posttest" element={<Page_materi_posttest/>}/>
        <Route path="/page_materi_pretest" element={<Page_materi_pretest/>}/>
        <Route path="/materi_belajar_posttest" element={<Materi_belajar_posttest/>}/>
        <Route path="/materi_belajar_pretest" element={<Materi_belajar_pretest/>}/>

        {/* Soal */}
        <Route path="/soal" element={<Soal/>}/>
        <Route path="/page_soal_posttest" element={<Page_soal_posttest/>}/>
        <Route path="/page_soal_pretest" element={<Page_soal_pretest/>}/>
        <Route path="/soal_belajar_pretest" element={<Soal_belajar_pretest/>}/>

        {/* Check user Exist */}
        <Route path="/quiz_setup" element={<Quiz_setup_posttest/>}/>
        <Route path="/soal_belajar_posttest" element={<CheckUserExist><Soal_belajar_posttest /></CheckUserExist>} />
        <Route path="/hasil" element={<CheckUserExist><Hasil /></CheckUserExist>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
