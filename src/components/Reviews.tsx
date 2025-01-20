import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewProps {
  name: string;
  position: string;
  date: string;
  review: string;
  rating: number;
}

const reviews: ReviewProps[] = [
  {
    name: "Alex Stanton",
    position: "CEO at Bukalapak",
    date: "21 July 2022",
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 4,
  },
  {
    name: "Skylar Dias",
    position: "CEO at Amazon",
    date: "20 July 2022",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 4,
  },
];

function ReviewCard({ name, position, date, review, rating }: ReviewProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <Image
          alt={`${name} avatar`}
          width={100}
          height={100}
          className="rounded-full h-12 w-12 object-cover"
          src={`/${name === "Alex Stanton" ? "profile" : "Profill-2"}.png`}
        />
        <div className="grid gap-1">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-semibold text-base">{name}</h3>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <p className="text-sm text-gray-500">{position}</p>
          <div className="flex gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "fill-[#FFC107] text-[#FFC107]"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed mt-4 text-gray-500">{review}</p>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="bg-white mt-8 rounded-xl">
      <div className="w-full max-w-3xl mx-auto p-4">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <span className="text-sm px-2 py-0.5 rounded-md bg-[#3563e9] text-white">
            13
          </span>
        </div>
        <div className="grid gap-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <button className="w-full mt-4 py-2.5 text-[#3563E9] hover:bg-[#3563E9]/5 rounded-lg transition-colors">
          Show All
        </button>
      </div>
    </div>
  );
}
