"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CarCardProps {
  name: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  price: number;
  oldPrice?: number;
  image: string;
  isLiked: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ name, type, fuelCapacity, transmission, seatingCapacity, price, oldPrice, image, isLiked }) => {
  return (
    <div className="relative bg-white p-4 rounded-[10px] shadow-lg w-full max-w-[280px] h-auto mx-auto">
      {/* Heart Icon */}
      <div className="absolute top-4 right-4">
        <Image
          src={isLiked ? "/heart.png" : "/Like.png"}
          alt="Heart Icon"
          width={24}
          height={24}
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="text-gray-500 text-sm mb-2">{type}</div>
      {/* Car Image */}
      <Image
        src={image}
        alt={name}
        width={1000}
        height={1000}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <div className="flex flex-wrap items-center space-x-2 mb-4 mt-12">
        <Image src="/gas-station.png" alt="Fuel Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">{fuelCapacity}</span>
        <Image src="/manual.png" alt="Manual Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">{transmission}</span>
        <Image
          src="/profile-2user.png"
          alt="People Icon"
          width={20}
          height={20}
        />
        <span className="text-gray-500 text-sm">{seatingCapacity}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black text-sm font-bold mb-4">
          ${price}.00/ <span className="text-gray-500">day</span>
          {oldPrice && (
            <>
              <br />
              <del className="text-gray-400">${oldPrice}.00</del>
            </>
          )}
        </div>
        <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
          <Link href={"/detailsCar"}>Rent Now</Link>
        </button>
      </div>
    </div>
  );
};

const RecomendationCar = () => {
  const cars = [
    {
      name: 'All New Rush',
      type: 'SUV',
      fuelCapacity: '70L',
      transmission: 'Manual',
      seatingCapacity: '6 People',
      price: 72.00,
      oldPrice: 80.00,
      image: '/All New Rush.png',
      isLiked: false,
    },
    {
      name: 'CR - V',
      type: 'SUV',
      fuelCapacity: '80L',
      transmission: 'Manual',
      seatingCapacity: '6 People',
      price: 80.00,
      image: '/CR  - V.png',
      isLiked: true,
    },
    {
      name: 'All New Terios',
      type: 'SUV',
      fuelCapacity: '90L',
      transmission: 'Manual',
      seatingCapacity: '6 People',
      price: 74.00,
      image: '/All New Terios.png',
      isLiked: false,
    },
    {
      name: 'CR - V',
      type: 'SUV',
      fuelCapacity: '80L',
      transmission: 'Manual',
      seatingCapacity: '6 People',
      price: 80.00,
      image: '/CR  - V-2.png',
      isLiked: true,
    },
    {
      name: 'MG ZX Exclusive',
      type: 'Hatchback',
      fuelCapacity: '70L',
      transmission: 'Manual',
      seatingCapacity: '4 People',
      price: 76.00,
      oldPrice: 80.00,
      image: '/MG ZX Exclusice.png',
      isLiked: true,
    },
    {
      name: 'New MG ZS',
      type: 'SUV',
      fuelCapacity: '80L',
      transmission: 'Manual',
      seatingCapacity: '6 People',
      price: 80.00,
      image: '/New MG ZS.png',
      isLiked: false,
    },
    {
      name: 'MG ZX Excite',
      type: 'Hatchback',
      fuelCapacity: '90L',
      transmission: 'Manual',
      seatingCapacity: '4 People',
      price: 74.00,
      image: '/MG ZX Excite.png',
      isLiked: true,
    },
    {
      name: 'New MG ZS',
      type: 'SUV',
      fuelCapacity: '80L',
      transmission: 'Manual',
      seatingCapacity: '6 People',
      price: 80.00,
      image: '/New MG ZS-2.png',
      isLiked: false,
    },
  ];

  return (
    <div className="mt-10 w-full px-4">
      {/* Header */}
      <div className="mb-6 mx-7">
        <h2 className="text-base text-[#90A3BF]">Recomendation Car</h2>
      </div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] max-w-[1200px] mx-auto">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            type={car.type}
            fuelCapacity={car.fuelCapacity}
            transmission={car.transmission}
            seatingCapacity={car.seatingCapacity}
            price={car.price}
            oldPrice={car.oldPrice}
            image={car.image}
            isLiked={car.isLiked}
          />
        ))}
      </div>
      {/* Show More Cars Button */}
      <div className="flex justify-between items-center mt-10 mb-10 max-w-[1200px] mx-auto">
        <div className="flex justify-center w-full">
          <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
            <Link href={'/categoryPage'}>
            Show more car
            </Link>
          </button>
        </div>
        <div className="text-base text-gray-300">120Car</div>
      </div>
    </div>
  );
};

export default RecomendationCar;
