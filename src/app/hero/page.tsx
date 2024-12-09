import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col bg-gray-100">
            <div className="relative flex flex-col md:flex-row justify-around items-center flex-1 p-6">
                <div className="bg-[#54A6FF] text-white p-8 rounded-xl flex-1 m-4">
                    <h2 className="text-3xl font-bold mb-4">The Best Platform <br /> for Car Rental</h2>
                    <p className="mb-4">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
                    <button className="bg-[#3563E9] text-[#fafafa] px-6 py-2 rounded-[4px]">Rental Car</button>
                    <div className="">
                        <img src="/Koenigsegg.png" alt="White Sports Car" className="w-[406px] h-[116px] ml-24" />
                    </div>
                </div>
                <div className="bg-[#3563E9] text-white p-8 rounded-xl flex-1 m-4">
                    <h2 className="text-3xl font-bold mb-4">Easy way to rent a <br /> car at a low price</h2>
                    <p className="mb-4">Providing cheap car rental services <br /> and safe and comfortable facilities.</p>
                    <button className="bg-[#54A6FF] text-[#fafafa] px-6 py-2 rounded-[4px]">Rental Car</button>
                    <div className="">
                        <img src="/Nissan GT - R.png" alt="Silver Sports Car" className="w-[406px] h-[116px] ml-24" />
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start p-6 space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="bg-white p-6 rounded-xl flex-1">
                    <h3 className="text-lg font-bold mb-2">Pick-Up</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Pick-Up Location</label>
                            <input type="text" placeholder="Select your city" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Pick-Up Date</label>
                            <input type="date" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Pick-Up Time</label>
                            <input type="time" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl flex-1">
                    <h3 className="text-lg font-bold mb-2">Drop-Off</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Drop-Off Location</label>
                            <input type="text" placeholder="Select your city" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Drop-Off Date</label>
                            <input type="date" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Drop-Off Time</label>
                            <input type="time" className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;