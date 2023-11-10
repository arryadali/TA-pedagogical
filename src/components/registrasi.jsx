import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Registrasi = () => {

  const [nama, setNama] = useState('')
  const [kelas, setKelas] = useState('')
  const [absen, setAbsen] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nama, kelas, username, password)
    axios.post('http://localhost:5000/api/signup', {
      nama : nama,
      kelas : kelas,
      absen : absen,
      username : username,
      password : password
    })
      .then(res => {
        console.log(res.data)
        if(res.data.code === 200) {
          alert('Register Success')
          window.location.href = '/loginpage'
        } else {
          alert("Error")
        }
      }).catch(err => {
        console.log(err)
      })

      
  }

  return (
    <section id='registrasi'>
      <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center'>

        <div class="lg:w-2/5 md:w-1/2 w-2/3">
            <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">

              <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registrasi</h1>
                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="name">Nama Lengkap</label>
                  <input
                  onChange={(e) => {
                    setNama(e.target.value)
                  }}
                  value={nama} 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="text" 
                  name="name" 
                  id="name"/>
                </div>

                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="kelas">Kelas</label>
                  <input
                  onChange={(e) => {
                    setKelas(e.target.value)
                  }}
                  value={kelas} 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="text" 
                  name="kelas" 
                  id="kelas"/>
                </div>

                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="absen">No Absen</label>
                  <input
                  onChange={(e) => {
                    setAbsen(e.target.value)
                  }}
                  value={absen} 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="text" 
                  name="absen" 
                  id="absen"/>
                </div>

                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Username</label>
                  <input
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                  value={username} 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="text" 
                  name="username" 
                  id="username" />
                </div>
                
                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
                  <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  value={password} 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="password" 
                  name="password" 
                  id="password" />
                </div>

                <button
                onClick={handleSubmit}
                type="submit" 
                class="w-full mt-8 bg-[#1D809F] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">
                  Register
                </button>

            </form>
          </div>

      </div>
    </section>
  )
}

export default Registrasi;