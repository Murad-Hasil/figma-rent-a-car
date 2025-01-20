"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Car {
  id: number;
  name: string;
  type: string;
  fuel: string;
  transmission: string;
  capacity: string;
  price: string;
  discountPrice: string | null;
  imgSrc: string;
  likeIcon: string;
}

const recentCars: Car[] = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$99.00",
    discountPrice: null,
    imgSrc: "/Koenigsegg.png",
    likeIcon: "/heart.png",
  },
  {
    id: 2,
    name: "Nissan GT - R",
    type: "Sport",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$80.00",
    discountPrice: "$100.00",
    imgSrc: "/Nissan GT - R.png",
    likeIcon: "/Like.png",
  },
  {
    id: 3,
    name: "Rolls - Royce",
    type: "Sport",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: "$96.00",
    discountPrice: null,
    imgSrc: "/Rolls - Royce.png",
    likeIcon: "/Like.png",
  }
];

const recommendedCars: Car[] = [
  {
    id: 4,
    name: "All New Rush",
    type: "SUV",
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$72.00",
    discountPrice: "$80.00",
    imgSrc: "/All New Rush.png",
    likeIcon: "/Like.png",
  },
  {
    id: 5,
    name: "CR-V",
    type: "SUV",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$80.00",
    discountPrice: null,
    imgSrc: "/CR  - V.png",
    likeIcon: "/heart.png",
  },
  {
    id: 6,
    name: "All New Terios",
    type: "SUV",
    fuel: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$74.00",
    discountPrice: null,
    imgSrc: "/All New Terios.png",
    likeIcon: "/Like.png",
  }
];

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="relative bg-white p-4 rounded-[10px] shadow-lg w-full max-w-[280px] h-auto mx-auto">
      {/* Heart Icon */}
      <div className="absolute top-4 right-4">
        <Image src={car.likeIcon} alt="Heart Icon" width={24} height={24} />
      </div>
      <h3 className="text-lg font-semibold">{car.name}</h3>
      <div className="text-gray-400 font-bold text-sm mb-2">{car.type}</div>
      {/* Car Image */}
      <Image
        src={car.imgSrc}
        alt={car.name}
        width={1000}
        height={1000}
        className="w-full h-auto object-cover rounded-md mb-6 mt-12"
      />
      <div className="flex flex-wrap items-center space-x-2 mb-4 mt-12">
        <Image src="/gas-station.png" alt="Fuel Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">{car.fuel}</span>
        <Image src="/manual.png" alt="Manual Icon" width={20} height={20} />
        <span className="text-gray-500 text-sm">{car.transmission}</span>
        <Image
          src="/profile-2user.png"
          alt="People Icon"
          width={20}
          height={20}
        />
        <span className="text-gray-500 text-sm">{car.capacity}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black text-sm font-bold mb-4">
          {car.price}/ <span className="text-gray-500">day</span>
          {car.discountPrice && (
            <>
              <br />
              <del className="text-gray-400">{car.discountPrice}</del>
            </>
          )}
        </div>
        <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
          <Link href={"/paymentPage"}>Rent Now</Link>
        </button>
      </div>
    </div>
  );
};

const RecentCars = () => {
  return (
    <div className="mt-10 w-full px-4">
      {/* Recent Car Section */}
      <div className="mb-10">
      <div className="flex justify-between items-center mb-6 mx-7">
        <h2 className="text-base text-[#90A3BF]">RecentCars</h2>
        <button className="text-base text-[#3563E9]">View All</button>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[1200px] mx-auto">
          {recentCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      {/* Recommendation Car Section */}
      <div>
      <div className="flex justify-between items-center mb-6 mx-7">
        <h2 className="text-base text-[#90A3BF]">RecomendationCars</h2>
        <button className="text-base text-[#3563E9]">View All</button>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[1200px] mx-auto">
          {recommendedCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCars;
