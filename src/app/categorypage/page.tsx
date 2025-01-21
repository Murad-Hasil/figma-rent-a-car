import React from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    price: 99.0,
    fuelCapacity: "90L",
    transmission: "Manual",
    seatingCapacity: "2 People",
    image: "/Koenigsegg.png",
    isLiked: true,
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    price: 80.0,
    fuelCapacity: "80L",
    transmission: "Manual",
    seatingCapacity: "2 People",
    image: "/Nissan GT - R.png",
    isLiked: false,
  },
  {
    name: "Rolls-Royce",
    type: "Sport",
    price: 96.0,
    fuelCapacity: "70L",
    transmission: "Manual",
    seatingCapacity: "4 People",
    image: "/Rolls - Royce.png",
    isLiked: false,
  },
  {
    name: "All New Rush",
    type: "SUV",
    fuelCapacity: "70L",
    transmission: "Manual",
    seatingCapacity: "6 People",
    price: 72.0,
    oldPrice: 80.0,
    image: "/All New Rush.png",
    isLiked: false,
  },
  {
    name: "CR-V",
    type: "SUV",
    price: 80.0,
    fuelCapacity: "80L",
    transmission: "Manual",
    seatingCapacity: "6 People",
    image: "/CR  - V.png",
    isLiked: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    price: 74.0,
    fuelCapacity: "90L",
    transmission: "Manual",
    seatingCapacity: "6 People",
    image: "/All New Terios.png",
    isLiked: false,
  },
  {
    name: "MG ZX Exclucise",
    type: "Hatchback",
    price: 76.0,
    oldPrice: 80.0,
    fuelCapacity: "70L",
    transmission: "Electric",
    seatingCapacity: "4 People",
    image: "/MG ZX Exclusice.png",
    isLiked: true,
  },
  {
    name: "New MG ZS",
    type: "SUV",
    price: 80.0,
    fuelCapacity: "80L",
    transmission: "Manual",
    seatingCapacity: "4 People",
    image: "/New MG ZS.png",
    isLiked: false,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    price: 74.0,
    fuelCapacity: "90L",
    transmission: "Electric",
    seatingCapacity: "4 People",
    image: "/MG ZX Excite.png",
    isLiked: true,
  },
];

function PickDropForm({ className = "" }) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center w-full max-w-[1200px] mx-auto mt-8 gap-6 ${className}`}
    >
      <div className="flex flex-col bg-white shadow-md md:w-[440px] w-full h-auto rounded-[10px] p-6">
        <div className="flex items-center gap-1 mb-2">
          <Image src={"/mark.png"} alt="Pick-Up" width={12} height={12} />
          <div className="font-bold text-base">Pick - Up</div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Pick-up Location Field */}
          <div>
            <p className="text-xs">Location</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Select city"
                className="w-full md:w-[130px] h-[24px] text-xs border-none bg-transparent"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <select
                className="outline-none text-xs ml-2 border-none bg-transparent"
                style={{ appearance: "none", background: "transparent" }}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
          {/* Pick-up Date Field */}
          <div>
            <p className="text-xs">Date</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Select date"
                className="w-full md:w-[130px] h-[24px] text-xs border-none bg-transparent"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <select
                className="outline-none text-xs ml-2 border-none bg-transparent"
                style={{ appearance: "none", background: "transparent" }}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
          {/* Pick-up Time Field */}
          <div>
            <p className="text-xs">Time</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Select time"
                className="w-full md:w-[130px] h-[24px] text-xs border-none bg-transparent"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <select
                className="outline-none text-xs ml-2 border-none bg-transparent"
                style={{ appearance: "none", background: "transparent" }}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:mt-10">
        <Image src={"/Switch.png"} alt="Switch" width={90} height={90} />
      </div>

      <div className="flex flex-col bg-white w-full shadow-md md:w-[440px] h-auto rounded-[10px] p-6">
        <div className="flex items-center gap-1 mb-2">
          <Image src={"/drop-off.png"} alt="Drop-Off" width={12} height={12} />
          <div className="font-bold text-base">Drop - Off</div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Drop-off Location Field */}
          <div>
            <p className="text-xs">Location</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Select city"
                className="w-full md:w-[130px] h-[24px] text-xs border-none bg-transparent"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <select
                className="outline-none text-xs ml-2 border-none bg-transparent"
                style={{ appearance: "none", background: "transparent" }}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
          {/* Drop-off Date Field */}
          <div>
            <p className="text-xs">Date</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Select date"
                className="w-full md:w-[130px] h-[24px] text-xs border-none bg-transparent"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <select
                className="outline-none text-xs ml-2 border-none bg-transparent"
                style={{ appearance: "none", background: "transparent" }}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
          {/* Drop-off Time Field */}
          <div>
            <p className="text-xs">Time</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Select time"
                className="w-full md:w-[130px] h-[24px] text-xs border-none bg-transparent"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <select
                className="outline-none text-xs ml-2 border-none bg-transparent"
                style={{ appearance: "none", background: "transparent" }}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CategoryPage() {
  return (
    <div className="h-fit pt-32 flex flex-col md:flex-row">
      <div className="w-full md:w-fit block">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] flex flex-col items-center">
        <div className="max-w-[800px] w-full flex justify-center mb-8">
          <PickDropForm />
        </div>
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {cars.map((car, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-[10px] shadow-lg w-full h-auto"
            >
              <div className="absolute top-4 right-4">
                <Image
                  src={car.isLiked ? "/heart.png" : "/Like.png"}
                  alt="Heart Icon"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <div className="text-gray-500 text-sm mb-2">{car.type}</div>
              <Image
                src={car.image}
                alt={car.name}
                width={1000}
                height={1000}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <div className="flex flex-wrap items-center space-x-2 mb-4">
                <Image
                  src="/gas-station.png"
                  alt="Fuel Icon"
                  width={20}
                  height={20}
                />
                <span className="text-gray-500 text-sm">
                  {car.fuelCapacity}
                </span>
                <Image
                  src="/manual.png"
                  alt="Manual Icon"
                  width={20}
                  height={20}
                />
                <span className="text-gray-500 text-sm">
                  {car.transmission}
                </span>
                <Image
                  src="/profile-2user.png"
                  alt="People Icon"
                  width={20}
                  height={20}
                />
                <span className="text-gray-500 text-sm">
                  {car.seatingCapacity}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black text-sm font-bold mb-4">
                  ${car.price.toFixed(2)}/{" "}
                  <span className="text-gray-500">day</span>
                  {car.oldPrice && (
                    <>
                      <br />
                      <del className="text-gray-400">
                        ${car.oldPrice.toFixed(2)}
                      </del>
                    </>
                  )}
                </div>
                <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
                  <Link href={"/detailsCar"}>Rent Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <button className="bg-[#3563e9] hover:bg-blue-500 transition-colors duration-300 text-white px-4 py-2 rounded">
            <Link href={""}>Showmore car</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
