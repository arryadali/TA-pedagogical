import React from 'react'
import Navbar from '../navbar';
import TabelHasil from '../tabelHasil';

const Profile = () => {

  return (
    <section id='profile' className='bg-[#FDFDFD] h-screen'>
        <Navbar/>

        <div className='font-[georgia] max-w-7xl m-auto'>
            <div className='text-center'>
                <h1 className='text-4xl mt-[8%] font-bold'>
                    Hi, {localStorage.getItem('NAMA')}!
                </h1>
                <p className='text-base'>Disini halaman untuk melihat progres kamu!</p>
            </div>
            
            <div className='mt-[5%]'>
                <TabelHasil></TabelHasil>
            </div>
        </div>
    </section>
  )
}

export default Profile;
