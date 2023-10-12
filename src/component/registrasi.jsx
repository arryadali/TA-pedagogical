import React from 'react'

const Registrasi = () => {
  return (
    <section id='registrasi'>
      <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center'>

        <div class="lg:w-2/5 md:w-1/2 w-2/3">
            <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">

              <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registrasi untuk Guru</h1>
                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="firstname">Nama Pertama</label>
                  <input 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="text" 
                  name="firstname" 
                  id="firstname"/>
                </div>

                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="lastname">Nama Terakhir</label>
                  <input 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="text" 
                  name="lastname" 
                  id="lastname" />
                </div>

                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Username</label>
                  <input 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="text" 
                  name="username" 
                  id="username" />
                </div>
                
                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
                  <input 
                  class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
                  type="text" 
                  name="password" 
                  id="password" />
                </div>

                <button type="submit" class="w-full mt-8 bg-[#38A186] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">
                  Register
                </button>

            </form>
          </div>

        {/* <div className='w-[60%] bg-white m-auto my-14 py-8 '>
          <p className='text-[32px] font-[poppins] mb-8 font-light text-center'>Sign Up For Teachers</p>

          <div className='m-auto w-[50%] h-auto'>

            <form action="">

              <div className='mb-4'>
                <label className='font-semibold text-[20px]'>First Name</label>
                <input type="text"
                className='block focus:outline-none w-[100%] h-10 px-2 mt-2 rounded-[5px] outline-[5px] border-2 border-gray-300' 
                name="" 
                id="" />
              </div>

              <div className='mb-4'>
                <label className='font-semibold text-[20px]'>Last Name</label>
                <input type="text"
                className='block focus:outline-none w-[100%] h-10 px-2 mt-2 rounded-[5px] outline-[5px] border-2 border-gray-300' 
                name="" 
                id="" />
              </div>

              <div className='mb-4'>
                <label className='font-semibold text-[20px]'>Username</label>
                <input type="text"
                className='block focus:outline-none w-[100%] h-10 px-2 mt-2 rounded-[5px] outline-[5px] border-2 border-gray-300' 
                name="" 
                id="" />
              </div>

              <div className='mb-8'>
                <label className='font-semibold text-[20px]'>Password</label>
                <input type="text"
                className='block focus:outline-none w-[100%] h-10 px-2 mt-2 rounded-[5px] outline-[5px] border-2 border-gray-300' 
                name="" 
                id="" />
              </div>

              <div className='text-center'>
                <button className='bg-[#38A186] w-[10rem] h-[3.8rem] mx-auto'>
                  <p className='font-bold text-white text-[20px]'>Submit</p>
                </button>
              </div>

            </form>

          </div>

        </div> */}

      </div>
    </section>
  )
}

export default Registrasi;