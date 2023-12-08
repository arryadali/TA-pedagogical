import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom';


const Full_materi = () => {

  const [currentStepPerkalianPembagian, setCurrentStepPerkalianPembagian] = useState(0);

  const navigate = useNavigate()

  const jenisKelas = localStorage.getItem("JENISKELAS")
  const isKelasKontrol = jenisKelas === "kelas-kontrol"

  const materiBacaPerkalianPembagian = [
    {
      id : 1,
      judul : "perkalian dan pembagian pecahan",
      materi : `Pecahan adalah bentuk atau istilah matematika yang digunakan untuk menyatakan bagian dari suatu keseluruhan. Pecahan terdiri dari dua komponen utama: pembilang (numeritor) dan penyebut (denominator).
      
      1. Pembilang (Numerator):
      Pembilang merupakan bagian atas dari pecahan dan menunjukkan jumlah bagian yang diambil dari keseluruhan. Contoh: Dalam pecahan 3/4, angka 3 adalah pembilang yang menunjukkan bahwa kita mengambil 3 bagian dari suatu keseluruhan.

      2. Penyebut (Denominator):
      Penyebut merupakan bagian bawah dari pecahan dan menunjukkan total pembagian keseluruhan. Contoh: Dalam pecahan 3/4, angka 4 adalah penyebut yang menunjukkan bahwa keseluruhan dibagi menjadi 4 bagian.

      3. Simbol Pecahan:
      Pecahan dituliskan dalam bentuk paling umum dengan menggunakan garis miring (/) antara pembilang dan penyebut. Contoh: 2/5, 1/3, 5/8.

      4. Pecahan Biasa dan Campuran:
      Pecahan biasa memiliki pembilang yang lebih kecil dari penyebut, misalnya 1/2, 3/4. Pecahan campuran adalah gabungan antara bilangan bulat dan pecahan, misalnya 1 1/2 (satu setengah).
      `
    },
    {
      id : 2,
      judul : "Perkalian Pecahan dengan Bilangan Bulat",
      materi : `Perkalian pecahan dengan bilangan bulat melibatkan penggandaan (replikasi) pecahan sebanyak bilangan bulat tertentu. Berikut adalah penjelasan lebih detail:
      
      1. Langkah Pertama: Konversi Bilangan Bulat ke Pecahan
      Bilangan bulat dapat dianggap sebagai pecahan dengan penyebut 1. Misalnya, untuk 3 x ½, kita dapat menganggap 3 sebagai 3/1.

      2. Langkah Kedua: Kalikan Pembilang dan Penyebut
      Kalikan pembilang pecahan pertama dengan pembilang pecahan kedua dan penyebut pecahan pertama dengan penyebut pecahan kedua. Contoh :

      3 × 1
      3 × 1 = 3 (pembilang pertama)
      1 × 2 = 2 (pembilang kedua)
      Hasilnya adalah 3/2
      `
    },
    {
      id : 3,
      judul : "Perkalian Pecahan dengan Pecahan",
      materi : `Perkalian pecahan dengan pecahan melibatkan penggandaan (replikasi) dua pecahan. Berikut adalah penjelasan lebih detail:
      
      1. Langkah Pertama: Kalikan Pembilang dan Penyebut
      Untuk perkalian pecahan pertama dengan pecahan kedua, kalikan pembilang pecahan pertama dengan pembilang pecahan kedua dan penyebut pecahan pertama dengan penyebut pecahan kedua. Contoh :

      3/4 x 2/3
      3 × 2 = 6 (pembilang pertama)
      4 × 3 = 12 (penyebut pertama)
      Hasil sementara: 6/12

      2. Langkah Kedua: Sederhanakan Jika Perlu
      Sederhanakan hasil perkalian dengan membagi pembilang dan penyebut dengan faktor persekutuan terbesar. Contoh: 6/12 dapat disederhanakan menjadi 1/2.
      `
    },
    {
      id : 4,
      judul : "Perkalian Tiga Pecahan atau Lebih",
      materi : `Perkalian tiga pecahan atau lebih melibatkan penggandaan (replikasi) tiga pecahan atau lebih. Proses ini memerlukan penerapan langkah-langkah perkalian pecahan yang telah dipelajari sebelumnya. Berikut adalah penjelasan lebih detail:
      
      1. Langkah Pertama: Kalikan Pembilang dan Penyebut Pecahan Pertama dengan Pecahan Kedua
      Kalikan pembilang pecahan pertama dengan pembilang pecahan kedua dan penyebut pecahan pertama dengan penyebut pecahan kedua. Contoh:
      2/3 x 3/4 x 5/6
      2 × 3 = 6 (pembilang pertama)
      3 × 4 = 12 (penyebut pertama)
      Hasil sementara: 6/12

      2. Langkah Kedua: Kalikan Hasil dengan Pembilang dan Penyebut Pecahan Berikutnya
      Ambil hasil sementara dan kalikan dengan pembilang dan penyebut pecahan berikutnya. Contoh:

      6/12 x 5/6
      6 × 5 = 30 (pembilang pertama)
      12 × 6 = 72 (penyebut pertama)
      Hasil Akhir: 6/12
      `
    },
  ]

  const handleNext = () => {
    if (currentStepPerkalianPembagian < materiBacaPerkalianPembagian.length - 1) {
      setCurrentStepPerkalianPembagian(currentStepPerkalianPembagian + 1);
    } else {
      navigate(isKelasKontrol ? "/materi" : "/materi_perkalian");
    }
  };

  const handlePrevious = () => {
    if (currentStepPerkalianPembagian > 0) {
      setCurrentStepPerkalianPembagian(currentStepPerkalianPembagian - 1);
    }
  };

  return (
    <section id='full_materi'>
      <div className='max-h-screen'>
        <nav>
          <div className='h-16 py-4 px-11'>
            <Link className='flex w-min gap-4' to={"/materi"}>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              <p className='text-xl font-[georgia]'>Materi</p>
            </Link>
          </div>
          <hr />
        </nav>

        <section id='hero' className='mt-8 m-auto max-w-screen-xl h-auto'>
          {materiBacaPerkalianPembagian && materiBacaPerkalianPembagian.length > 0 && (
             <>
              <h1 className='font-bold uppercase text-3xl'>
                {materiBacaPerkalianPembagian[currentStepPerkalianPembagian]?.judul}
              </h1>
              <p style={{ whiteSpace: "pre-line" }} className='text-xl text-justify'>{materiBacaPerkalianPembagian[currentStepPerkalianPembagian]?.materi}</p>

              <div className="flex mt-8">
                  {currentStepPerkalianPembagian > 0 && (
                      <button
                          className="btn"
                          onClick={handlePrevious}
                      >
                          Kembali
                      </button>
                  )}
                  {currentStepPerkalianPembagian === materiBacaPerkalianPembagian.length - 1 ? (
                      <button
                          className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                          onClick={handleNext}
                      >
                          Selesai
                      </button>
                  ) : (
                      <button
                          className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                          onClick={handleNext}
                      >
                          Selanjutnya
                      </button>
                  )}
              </div>
            </>
          )}
        </section>
      </div>
    </section>
  )
}
export default Full_materi;