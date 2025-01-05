"use client";
import Image from "next/image";
import React from "react";

const KoenigseggCard = () => {
  return (
    <div className="relative bg-white p-4 rounded-[10px] shadow-lg w-full max-w-[280px] h-auto mx-auto">
      {/* Heart Icon */}
      <div className="absolute top-4 right-4">
        <Image src="/heart.png" alt="Heart Icon" width={24} height={24} />
      </div>
      <h3 className="text-lg font-semibold">Koenigsegg</h3>
      <div className="text-gray-400 font-bold text-sm mb-2">Sport</div>
      {/* Car Image */}
      <Image
        src="/koenigsegg.png"
        alt="Koenigsegg"
        width={1000}
        height={1000}
        className="w-full h-auto object-cover rounded-md mb-6 mt-12"
      />
      <div className="flex flex-wrap items-center space-x-2 mb-4 mt-12">
        <Image src="/gas-station.png" alt="Fuel Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">90L</span>
        <Image src="/manual.png" alt="Manual Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">Manual</span>
        <Image
          src="/profile-2user.png"
          alt="People Icon"
          width={20}
          height={20}
        />
        <span className="text-gray-500 text-sm">2 People</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black text-sm font-bold mb-4">
          $99.00/ <span className="text-gray-500">day</span>
        </div>
        <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
          Rent Now
        </button>
      </div>
    </div>
  );
};

const NissanGTRCard = () => {
  return (
    <div className="relative bg-white p-4 rounded-[10px] shadow-lg w-full max-w-[280px] h-auto mx-auto">
      {/* Heart Icon */}
      <div className="absolute top-4 right-4">
        <Image src="/Like.png" alt="Heart Icon" width={24} height={24} />
      </div>
      <h3 className="text-lg font-semibold">Nissan GT - R</h3>
      <div className="text-gray-400 font-bold text-sm mb-2">Sport</div>
      {/* Car Image */}
      <Image
        src="/Nissan GT - R.png"
        alt="Koenigsegg"
        width={1000}
        height={1000}
        className="w-full h-auto object-cover rounded-md mb-6 mt-12"
      />
      <div className="flex flex-wrap items-center space-x-2 mb-4 mt-12">
        <Image src="/gas-station.png" alt="Fuel Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">80L</span>
        <Image src="/manual.png" alt="Manual Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">Manual</span>
        <Image
          src="/profile-2user.png"
          alt="People Icon"
          width={20}
          height={20}
        />
        <span className="text-gray-500 text-sm">2 People</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black text-sm font-bold mb-4">
          $80.00/ <span className="text-gray-500">day</span> <br />{" "}
          <del className="text-gray-400">$100.00</del>
        </div>
        <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
          Rent Now
        </button>
      </div>
    </div>
  );
};

const RollsRoyceCard = () => {
  return (
    <div className="relative bg-white p-4 rounded-[10px] shadow-lg w-full max-w-[280px] h-auto mx-auto">
      {/* Heart Icon */}
      <div className="absolute top-4 right-4">
        <Image src="/heart.png" alt="Heart Icon" width={24} height={24} />
      </div>
      <h3 className="text-lg font-semibold">Rolls - Royce</h3>
      <div className="text-gray-400 font-bold text-sm mb-2">Sedan</div>
      {/* Car Image */}
      <Image
        src="/Rolls - Royce.png"
        alt="Koenigsegg"
        width={1000}
        height={1000}
        className="w-full h-auto object-cover rounded-md mb-6 mt-12"
      />
      <div className="flex flex-wrap items-center space-x-2 mb-4 mt-12">
        <Image src="/gas-station.png" alt="Fuel Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">70L</span>
        <Image src="/manual.png" alt="Manual Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">Manual</span>
        <Image
          src="/profile-2user.png"
          alt="People Icon"
          width={20}
          height={20}
        />
        <span className="text-gray-500 text-sm">4 People</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black text-sm font-bold mb-4">
          $96.00/ <span className="text-gray-500">day</span>
        </div>
        <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
          Rent Now
        </button>
      </div>
    </div>
  );
};

const SecondNissanGTRCard = () => {
  return (
    <div className="relative bg-white p-4 rounded-[10px] shadow-lg w-full max-w-[280px] h-auto mx-auto">
      {/* Heart Icon */}
      <div className="absolute top-4 right-4">
        <Image src="/Like.png" alt="Heart Icon" width={24} height={24} />
      </div>
      <h3 className="text-lg font-semibold">Nissan GT - R</h3>
      <div className="text-gray-400 font-bold text-sm mb-2">Sport</div>
      {/* Car Image */}
      <Image
        src="/Nissan GT - R.png"
        alt="Koenigsegg"
        width={1000}
        height={1000}
        className="w-full h-auto object-cover rounded-md mb-6 mt-12"
      />
      <div className="flex flex-wrap items-center space-x-2 mb-4 mt-12">
        <Image src="/gas-station.png" alt="Fuel Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">80L</span>
        <Image src="/manual.png" alt="Manual Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">Manual</span>
        <Image
          src="/profile-2user.png"
          alt="People Icon"
          width={20}
          height={20}
        />
        <span className="text-gray-500 text-sm">2 People</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black text-sm font-bold mb-4">
          $80.00/ <span className="text-gray-500">day</span> <br />{" "}
          <del className="text-gray-400">$100.00</del>
        </div>
        <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
          Rent Now
        </button>
      </div>
    </div>
  );
};

const CarRental = () => {
  return (
    <div className="mt-10 w-full px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 mx-7">
        <h2 className="text-base text-[#90A3BF]">Popular Cars</h2>
        <button className="text-base text-[#3563E9]">View All</button>
      </div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] max-w-[1200px] mx-auto">
        <KoenigseggCard />
        <NissanGTRCard />
        <RollsRoyceCard />
        <SecondNissanGTRCard />
      </div>
    </div>
  );
};

export default CarRental;
