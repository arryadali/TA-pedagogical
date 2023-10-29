import React from 'react'
import { Link } from 'react-router-dom';

const Loginpage = () => {
  return (
    <section id='loginpage'>
        <div class="bg-gray-100 flex justify-center items-center h-screen">

            <div class="w-1/2 h-screen hidden lg:block">
                <img src="../asset/sekolah/login.jpg" alt="" className='object-cover w-full h-full'/>
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
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        />
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-gray-600">Password</label>
                        <input 
                        type="text"
                        id='password'
                        name='password'
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        />
                    </div>

                    <Link to={'/dashboard'}>
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

    </section>
  )
}

export default Loginpage;
