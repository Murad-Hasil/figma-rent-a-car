import CarRental from '@/components/CarRental'
import PickDropForm from '@/components/PickDropForm'
import RecomendationCar from '@/components/RecomendationCar'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
    <div className="flex flex-wrap justify-around mx-6 gap-3 pt-40">
        {/* Left div */}
        <div className="w-full md:w-[580px] h-auto md:h-[360px] bg-cover bg-center p-6 rounded-[10px]" style={{ backgroundImage: "url('/bg-1.jpg')" }}>
          <h3 className="ml-1 text-white text-xl md:text-2xl font-bold leading-8 mt-2 mb-4">The Best Platform <br /> for Car Rental</h3>
          <p className="ml-1 text-white text-base leading-6 mb-3">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
          <button className="ml-1 text-white bg-[#3563E9] hover:bg-[#3562e9d2] w-[120px] h-[44px] rounded">Rental Car</button>
          <div className="ml-1 mt-4">
            <Image src="/Koenigsegg.png" alt="" width={1000} height={1000} className="w-full md:w-[350px] h-auto md:h-[100px] ml-0 md:ml-32" />
          </div>
        </div>

        {/* Right div */}
        <div className="w-full md:w-[580px] h-auto md:h-[360px] bg-cover bg-center p-6 rounded-[10px]" style={{ backgroundImage: "url('/bg-2.jpg')" }}>
          <h3 className="ml-1 text-white text-xl md:text-2xl font-bold leading-8 mt-2 mb-4">Easy way to rent a <br /> car at a low price</h3>
          <p className="ml-1 text-white text-base leading-6 mb-3">Providing cheap car rental services <br /> and safe and comfortable facilities.</p>
          <button className="ml-1 text-white bg-[#54A6FF] hover:bg-[#54a7ffcf] w-[120px] h-[44px] rounded">Rental Car</button>
          <div className="ml-1 mt-4">
            <Image src="/car (1).png" alt="" width={1000} height={1000} className="w-full md:w-[340px] h-auto md:h-[108px] ml-0 md:ml-32" />
          </div>
        </div>
      </div>

      {/* Location section */}
      <PickDropForm />
      <CarRental />
      <RecomendationCar />
    </>
  )
}
