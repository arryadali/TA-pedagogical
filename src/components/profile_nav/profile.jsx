import React from 'react'
import Navbar from '../navbar';
import TabelHasil from '../tabelHasil';

const Profile = () => {

  return (
    <section id='profile' className='bg-[#FDFDFD] h-screen'>
        <Navbar/>

        <div className='font-[georgia] max-w-7xl m-auto'>
            <div className='text-center'>
                <h1 className='text-4xl mt-[6%] font-bold'>
                    Hi, {localStorage.getItem('NAMA')}!
                </h1>
                <p className='text-base'>Disini halaman untuk melihat progres kamu!</p>
            </div>
            
            
            <section id='hero'>
                <div className='w-1/2 m-auto h-20 rounded-md outline outline-offset-2 outline-[#D3C5D6]'>
                    <div className='rounded-md bg-[#EBEBEB] p-3 outline outline-offset-2 outline-[#D3C5D6] mt-11'>
                        <h1 className='text-lg'>Progress Belajar</h1>
                    </div>
                </div>
                <div className='mt-[5%]'>
                    <TabelHasil></TabelHasil>
                </div>
            </section>
        </div>
    </section>
  )
}

export default Profile;
