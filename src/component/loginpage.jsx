import React from 'react'
import { Link } from 'react-router-dom';

const Loginpage = () => {
  return (
    <section id='loginpage'>
        <div class="bg-gray-100 flex justify-center items-center h-screen">

            <div class="w-1/2 h-screen hidden lg:block">
                <div className='object-cover w-full h-full'></div>
            </div>

            <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 class="text-2xl font-semibold mb-4">Login</h1>

                <form>

                    <div class="mb-4">
                        <label for="username" class="block text-gray-600">Username</label>
                        <input 
                        type="text"
                        id='username'
                        name='username'
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                        />
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-gray-600">Password</label>
                        <input 
                        type="text"
                        id='password'
                        name='password'
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                        />
                    </div>

                    <Link to={'/homepage'}>
                        <button 
                        type="submit" 
                        class="bg-[#1D809F]  text-white font-semibold rounded-md py-2 px-4 w-full">
                            Masuk
                        </button>
                    </Link>
                </form>

            <div class="mt-6 text-center">
                <p>Daftar sebagai administrator pada aplikasi ini?</p>
                <Link to={'/registrasi'}>
                    <p className='hover:underline text-blue-500'>Daftar Disini!</p>
                </Link>
            </div>
            </div>
        </div>



        {/* <div className='flex w-[80%] m-auto h-auto'>
            <div className='bg-green-500 w-[50%]'>
                a
            </div>
            <div className='bg-red-500 w-[50%]'>
                <div className='w-[80%] m-auto'>
                    <div className='font-medium font-sans'>
                        <p className='text-[36px]'>Selamat datang ..... !</p>
                        <p className='text-[20px] text-[#B6B6B6]'>Silahkan masukan akun anda</p>
                    </div>

                    <div>
                        <div>
                            <label className='block font-sans font-medium text-[20px] mt-[8%]'>Username</label>
                            <input 
                            type="text" 
                            className='border-2 w-[70%] h-[40px] mt-[2%] bg-[#DBDBDB] px-3 focus:outline-none'
                            />
                        </div>

                        <div>
                            <label className='block font-sans font-medium text-[20px] mt-[3%]'>Password</label>
                            <input 
                            type="text" 
                            className='border-2 w-[70%] h-[40px] mt-[2%] bg-[#DBDBDB] px-3 focus:outline-none'
                            />
                        </div>

                        <button className='bg-[#1D809F] mt-[7%] w-[70%] h-[40px]'>
                            <Link to={'/homepage'}>
                                <p className='font-bold text-[20px] text-white'>Masuk</p>
                            </Link>
                        </button>

                        <div className='w-[70%] text-center mt-4'>
                            <p>Daftar sebagai administrator pada aplikasi ini?</p>
                            <Link to={'/registrasi'}>
                                <p className='text-[#3430FF]'>Daftar disini!</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>
  )
}

export default Loginpage;
