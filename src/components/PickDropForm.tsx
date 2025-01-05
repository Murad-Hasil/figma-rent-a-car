import React from 'react';
import Image from 'next/image';

export default function PickDropForm() {
  return (
    <div className="flex flex-col md:flex-row justify-center max-w-[1200px] mx-auto mt-6 gap-4">
        {/* Pick up location information */}
        <div className="flex flex-col bg-white shadow-md w-full md:w-[530px] h-auto md:h-[120px] rounded-[10px] p-4">
          <div className="flex items-center gap-1 mb-2">
            <Image src={'/mark.png'} alt="Pick-Up" width={10} height={10} />
            <div className="font-bold text-base">Pick - Up</div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>
              <p>Location</p>
              <div className="flex">
                <input type="text" placeholder="Select your city" className="w-[120px] h-[20px]" /> 
                <select className="outline-none"><option value=""></option></select>
              </div>
            </div>
            <div>
              <p>Date</p>
              <div className="flex">
                <input type="text" placeholder="Select your date" className="w-[120px] h-[20px]" /> 
                <select className="outline-none"><option value=""></option></select>
              </div>
            </div>
            <div>
              <p>Time</p>
              <div className="flex">
                <input type="text" placeholder="Select your time" className="w-[120px] h-[20px]" /> 
                <select className="outline-none"><option value=""></option></select>
              </div>
            </div>
          </div>
        </div>

        {/* Switch button */}
        <div className="flex items-center justify-center mt-4 md:mt-10">
          <Image src={'/switch.png'} alt="Switch" width={100} height={100} />
        </div>

        {/* Drop off location information */}
        <div className="flex flex-col bg-white shadow-md w-full md:w-[530px] h-auto md:h-[120px] rounded-[10px] p-4">
          <div className="flex items-center gap-1 mb-2">
            <Image src={'/drop-off.png'} alt="Drop-Off" width={10} height={10} />
            <div className="font-bold text-base">Drop - Off</div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>
              <p>Location</p>
              <div className="flex">
                <input type="text" placeholder="Select your city" className="w-[120px] h-[20px]" /> 
                <select className="outline-none"><option value=""></option></select>
              </div>
            </div>
            <div>
              <p>Date</p>
              <div className="flex">
                <input type="text" placeholder="Select your date" className="w-[120px] h-[20px]" /> 
                <select className="outline-none"><option value=""></option></select>
              </div>
            </div>
            <div>
              <p>Time</p>
              <div className="flex">
                <input type="text" placeholder="Select your time" className="w-[120px] h-[20px]" /> 
                <select className="outline-none"><option value=""></option></select>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
