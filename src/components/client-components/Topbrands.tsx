"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

function Topbrands() {
  return (
    <div className=' bg-slate-200'>

      <div className='py-10 h-min '>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl text-center font-semibold '>Top Companes</h1>
          <span className='border-b border-black w-[200px] mt-3'></span>
        </div>


        <div className='mt-10 px-8'>
          <Carousel opts={{
            align: "center",
            loop: true,
          }}
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}>
            <CarouselContent>
              <CarouselItem className=' ml-0 basis-1/1 lg:basis-1/3 lg:ml-40'><img src="./logos/bajaj.webp" alt="" /></CarouselItem>
              <CarouselItem className='basis-1/1  lg:basis-1/4'><img src="./logos/dunzo.webp" alt="" /></CarouselItem>
              <CarouselItem className='basis-1/1  lg:basis-1/4'><img src="./logos/ic-paytm.webp" alt="" /></CarouselItem>

              <CarouselItem className='basis-1/2  lg:basis-1/4'><img src="./logos/zepto.webp" alt="" /></CarouselItem>
              <CarouselItem className='basis-1/2  lg:basis-1/6'><img src="./logos/reliance-nippon.webp" alt="" /></CarouselItem>
            </CarouselContent>

          </Carousel>

        </div>
      </div>

    </div>
  )
}

export default Topbrands