import React from 'react'
import { Button } from '../ui/button'

function Banner() {
  return (
    <div className='flex h-screen flex-col lg:flex-row justify-between  container m-auto'>
      <div className='flex flex-col justify-center h-full order-2 lg:order-1 w-full lg:w-[40%]'>
        <h1 className='  text-5xl font-bold text-black'>Your <span className='text-gradiant'>job search</span> and <span className='text-gradiant'>find a best employe</span> ends here</h1>
        <p className=' text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure nulla officiis praesentium, a dolor delectus nostrum, minima maiores aspernatur ipsam nihil nam cum provident totam consequuntur veniam minus laborum, asperiores ducimus enim impedit!</p>
        <div className='flex gap-3 mt-4'>
          <Button className="bg-gradiant text-white font-sans flex justify-center items-center p-6 hover:bg-blue-900 hover:text-white text-lg font-semibold">Find a job</Button>
          <Button className="bg-gradiant text-white font-sans flex justify-center items-center p-6 hover:bg-blue-900 hover:text-white text-lg font-semibold">Post a job</Button>
        </div>
      </div>
      <div className='flex justify-center items-center order-1 lg:order-2 mt-[100px] lg:mt-0 '>
        <img src="./images/banner.jpg" alt="banner image" className='lg:w-[600px] ' />
      </div>
    </div>
  )
}

export default Banner