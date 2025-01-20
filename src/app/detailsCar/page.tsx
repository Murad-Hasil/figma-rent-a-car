"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Reviews from "@/components/Reviews";
import RecentCars from "@/components/RecentCars";

export default function DetailsCar() {
  return (
    <div className="flex min-h-screen bg-[#F6F7F9] pt-32">
      <div className="pt-9">
        <Sidebar />
      </div>
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[10px] shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left side - Car showcase */}
              <div className="p-6 text-white rounded-l-[10px] bg-[#3563E9]">
                <div className="space-y-4">
                  <h2 className="text-[32px] font-semibold leading-[38px]">
                    Sports car with the best <br /> design and acceleration
                  </h2>
                  <p className="text-[16px] opacity-80">
                    Safety and comfort while driving a <br /> futuristic and
                    elegant sports car
                  </p>
                  <div className="relative mt-8">
                    <Image
                      src="/Nissan GT - R.png"
                      alt="Nissan GT-R"
                      width={400}
                      height={250}
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="flex gap-4 mt-6">
                    <div className="relative w-[132px] h-[88px] rounded-[8px] overflow-hidden bg-white/30">
                      <Image
                        src="/Nissan GT - R.png"
                        alt="Nissan GT-R Exterior"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="relative w-[132px] h-[88px] rounded-[8px] overflow-hidden bg-white/30">
                      <Image
                        src="/View 2.png"
                        alt="Nissan GT-R Interior 1"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="relative w-[132px] h-[88px] rounded-[8px] overflow-hidden bg-white/30">
                      <Image
                        src="/View 3.png"
                        alt="Nissan GT-R Interior 2"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Car details */}
              <div className="p-6">
                <div className="flex flex-col justify-between items-start">
                  <div className="flex justify-around gap-44">
                    <h1 className="text-[32px] font-semibold text-[#1A202C]">
                      Nissan GT - R
                    </h1>
                    <div className="flex items-center gap-8">
                      <Image
                        src="/heart.png"
                        alt="Favorite"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex items-center gap-2">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#FBB040] fill-[#FBB040]"
                        />
                      ))}
                      <Star className="w-5 h-5 text-[#D1D5DB]" />
                    </div>
                    <span className="text-sm text-[#90A3BF]">
                      440+ Reviewer
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-[#90A3BF] text-[16px]">
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".
                </p>

                <div className="mt-8 grid grid-cols-4 gap-16">
                  <div>
                    <p className="text-[#90A3BF] text-[14px]">Type Car</p>
                    <p className="text-[#1A202C] text-[16px] font-semibold mt-1">
                      Sport
                    </p>
                  </div>
                  <div>
                    <p className="text-[#90A3BF] text-[14px]">Capacity</p>
                    <p className="text-[#1A202C] text-[16px] font-semibold mt-1">
                      2 Person
                    </p>
                  </div>
                  <div>
                    <p className="text-[#90A3BF] text-[14px]">Steering</p>
                    <p className="text-[#1A202C] text-[16px] font-semibold mt-1">
                      Manual
                    </p>
                  </div>
                  <div>
                    <p className="text-[#90A3BF] text-[14px]">Gasoline</p>
                    <p className="text-[#1A202C] text-[16px] font-semibold mt-1">
                      70L
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[28px] font-bold text-[#1A202C]">
                        $80.00/
                      </p>
                      <p className="text-sm text-[#90A3BF]">days</p>
                    </div>
                    <p className="text-[#90A3BF] line-through">$100.00</p>
                  </div>
                  <button className="bg-[#3563E9] hover:bg-blue-600 transition-colors duration-300 text-white px-8 py-4 rounded-[4px] font-semibold">
                    <Link href={'/paymentPage'}>Rent Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Reviews />
      <RecentCars />
      </main>
    </div>
  );
}
