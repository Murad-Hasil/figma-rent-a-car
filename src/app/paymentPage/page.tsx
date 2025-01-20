"use client"

import { useState } from "react"
import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface FormData {
  name: string
  phone: string
  address: string
  town: string
  pickupLocation: string
  pickupDate: string
  pickupTime: string
  dropoffLocation: string
  dropoffDate: string
  dropoffTime: string
  paymentMethod: 'credit' | 'paypal' | 'bitcoin'
  cardNumber: string
  cardExpiry: string
  cardCvc: string
  cardHolder: string
  marketing: boolean
  terms: boolean
}

export default function PaymentPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    town: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffLocation: '',
    dropoffDate: '',
    dropoffTime: '',
    paymentMethod: 'credit',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardHolder: '',
    marketing: false,
    terms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-[#F6F7F9] p-4 md:p-8 mt-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr,400px] gap-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Billing Info */}
          <section className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Billing Info</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Please enter your billing info
                </p>
              </div>
              <span className="text-sm text-gray-500">Step 1 of 4</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="block text-sm mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="town">
                  Town / City
                </label>
                <input
                  type="text"
                  id="town"
                  placeholder="Town or city"
                  className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                  value={formData.town}
                  onChange={(e) =>
                    setFormData({ ...formData, town: e.target.value })
                  }
                />
              </div>
            </div>
          </section>

          {/* Rental Info */}
          <section className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Rental Info</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Please select your rental date
                </p>
              </div>
              <span className="text-sm text-gray-500">Step 2 of 4</span>
            </div>
            <div className="space-y-6 mt-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="font-medium">Pick - Up</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Locations</label>
                    <select
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.pickupLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupLocation: e.target.value,
                        })
                      }
                    >
                      <option value="">Select your city</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Date</label>
                    <select
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.pickupDate}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupDate: e.target.value })
                      }
                    >
                      <option value="">Select your date</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2">Time</label>
                    <select
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.pickupTime}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupTime: e.target.value })
                      }
                    >
                      <option value="">Select your time</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="font-medium">Drop - Off</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Locations</label>
                    <select
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.dropoffLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropoffLocation: e.target.value,
                        })
                      }
                    >
                      <option value="">Select your city</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Date</label>
                    <select
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.dropoffDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropoffDate: e.target.value,
                        })
                      }
                    >
                      <option value="">Select your date</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2">Time</label>
                    <select
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.dropoffTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropoffTime: e.target.value,
                        })
                      }
                    >
                      <option value="">Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Please enter your payment method
                </p>
              </div>
              <span className="text-sm text-gray-500">Step 3 of 4</span>
            </div>
            <div className="space-y-4 mt-6">
              <label className="flex items-center justify-between p-4 rounded-lg bg-[#F6F7F9] cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === "credit"}
                    onChange={() =>
                      setFormData({ ...formData, paymentMethod: "credit" })
                    }
                    className="w-4 h-4 text-blue-500"
                  />
                  <span>Credit Card</span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/Visa.png"
                    alt="Visa"
                    width={40}
                    height={40}
                    className="h-5"
                  />
                  <Image
                    src="/mastercard.png"
                    alt="Mastercard"
                    width={40}
                    height={40}
                    className="h-5"
                  />
                </div>
              </label>

              {formData.paymentMethod === "credit" && (
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.cardNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, cardNumber: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Card Holder</label>
                    <input
                      type="text"
                      placeholder="Card holder"
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.cardHolder}
                      onChange={(e) =>
                        setFormData({ ...formData, cardHolder: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">CVC</label>
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-full p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
                      value={formData.cardCvc}
                      onChange={(e) =>
                        setFormData({ ...formData, cardCvc: e.target.value })
                      }
                    />
                  </div>
                </div>
              )}

              <label className="flex items-center justify-between p-4 rounded-lg bg-[#F6F7F9] cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={() =>
                      setFormData({ ...formData, paymentMethod: "paypal" })
                    }
                    className="w-4 h-4 text-blue-500"
                  />
                  <span>PayPal</span>
                </div>
                <Image
                  src="/PayPal.png"
                  alt="PayPal"
                  width={80}
                  height={80}
                  className="h-5"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-lg bg-[#F6F7F9] cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === "bitcoin"}
                    onChange={() =>
                      setFormData({ ...formData, paymentMethod: "bitcoin" })
                    }
                    className="w-4 h-4 text-blue-500"
                  />
                  <span>Bitcoin</span>
                </div>
                <Image
                  src="/Bitcoin.png"
                  alt="Bitcoin"
                  width={80}
                  height={80}
                  className="h-5"
                />
              </label>
            </div>
          </section>

          {/* Confirmation */}
          <section className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Confirmation</h2>
                <p className="text-sm text-gray-500 mt-1">
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </p>
              </div>
              <span className="text-sm text-gray-500">Step 4 of 4</span>
            </div>
            <div className="space-y-4 mt-6">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={formData.marketing}
                  onChange={(e) =>
                    setFormData({ ...formData, marketing: e.target.checked })
                  }
                />
                <span className="text-sm text-gray-500">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promised!
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={formData.terms}
                  onChange={(e) =>
                    setFormData({ ...formData, terms: e.target.checked })
                  }
                />
                <span className="text-sm text-gray-500">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
          </section>

          <button className="bg-[#3563E9] hover:bg-blue-600 transition-colors duration-300 text-white px-8 py-4 rounded-[4px] font-semibold">
            <Link href={"/"}>Rent Now</Link>
          </button>

          <div className="flex flex-col items-start gap-2 text-center">
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-900 font-medium">All your data are safe</p>
            </div>
            <p className="text-xs text-gray-400">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </form>

        {/* Right Column - Summary */}
        <div className="bg-white p-6 rounded-xl h-fit">
          <h2 className="text-xl font-semibold mb-2">Rental Summary</h2>
          <p className="text-sm text-gray-500 mb-6">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>

          <div className="flex gap-4 mb-6">
            <div className="bg-[#3563E9] rounded-lg p-1 w-28 h-24 flex items-center justify-center" style={{ backgroundImage: "url('/bg-2.jpg')" }}>
              <Image
                src="/Nissan GT - R.png"
                alt="Nissan GT-R"
                width={100}
                height={100}
                className="w-24 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Nissan GT-R</h3>
              <div className="flex gap-1 my-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= 4
                        ? "fill-[#FFC107] text-[#FFC107]"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  440+ Reviewer
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-b py-4 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold">$80.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Tax</span>
              <span className="font-semibold">$0</span>
            </div>
          </div>

          <div className="flex items-center gap-4 my-4">
            <input
              type="text"
              placeholder="Apply promo code"
              className="flex-1 p-4 rounded-lg bg-[#F6F7F9] border-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="text-[#3563E9] font-semibold whitespace-nowrap">
              Apply now
            </button>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-gray-500">Total Rental Price</p>
              <p className="text-xs text-gray-400">
                Overall price and includes rental discount
              </p>
            </div>
            <span className="text-2xl font-bold">$80.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

