import React from 'react'
import "@/app/globals.css"
import Googlleprovider from '@/components/server-components/googlleprovider';
import SignFrom from '@/components/server-components/signFrom'


function SignIn() {
  return (
    <div className='min-h-screen w-full flex justify-center items-center' >
      <div className='flex items-center justify-center flex-col gap-3 border-2 p-8 rounded-md text-black'>
        <div className='border-b  border-black'>
          <h1 className='text-4xl font-semibold pb-3'>Sign-in</h1>
        </div>
        <SignFrom />
        <div >
          <div className='flex justify-center items-center '>
            <span className='border-b w-[40%] border-black'></span>
            <span className=' inline-block m-auto'>OR</span>
            <span className='border-b w-[40%] border-black'></span>
          </div>
          <Googlleprovider />
        </div>
      </div>
    </div >
  )
}

export default SignIn;