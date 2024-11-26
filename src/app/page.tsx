"use client"
import Image from "next/image"

import image from '../../public/product-Image/image.png'
import image1 from '../../public/product-Image/image1.png'
import image2 from '../../public/product-Image/image2.png'


const page = () => {
  return (
    <div className='flex justify-evenly pt-12'>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

        <div className='border py-5 px-4 '>
          <Image src={image} alt='a' width={200} height={150} />
          <h1 className='text-center font-semibold text-xl mt-2'>Handsfree</h1>
          <h2 className='text-center font-medium text-xl py-2 '>Rs: 2500</h2>
          <div className='text-center'>
            <button className=' bg-amber-600 py-2 px-8 rounded-lg text-lg'>Buy Now</button>
          </div>
        </div>


        <div className='border py-5 px-4 '>
          <Image src={image1} alt='a' width={200} height={150} />
          <h1 className='text-center font-semibold text-xl'>Airpods pro </h1>
          <h2 className='text-center font-medium text-xl py-2 '>Rs: 1500</h2>
          <div className='text-center'>
            <button className='bg-amber-600 py-2 px-8 rounded-lg text-lg' >Buy Now</button>
          </div>
        </div>

        <div className='border py-5 px-4'>
          <Image src={image2} alt='a' width={200} height={150} />
          <h1 className='text-center font-semibold text-xl'>HeadPhone </h1>
          <h2 className='text-center font-medium text-xl py-2 '>Rs: 4000</h2>
          <div className='text-center'>
            <button className='bg-amber-600 py-2 px-8 rounded-lg text-lg'>Buy Now</button>
          </div>
        </div>


      </div>
    </div>



  )
}

export default page