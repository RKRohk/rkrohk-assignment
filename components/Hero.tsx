import Image from "next/image";
import { CardProps } from "../typings";
import HeroCard from "./HeroCard";
const sampleProps: CardProps = {
  img_url: "/images/building1.png",
  title: "The Pavalion III",
  location: "Outer Ring Road, Bangalore",
  funding_status: 64,
  area: 52277,
  price: 12338,
  yield: 9.14,
  return_target: 18.1,
  status: "ACTIVE",
};
export default function Hero() {
  return (
    <div className="bg-green-swadesh h-screen w-screen -mt-10">
      <div className="pt-12 relative">
        <span className="ml-12 ">
          <Image width={170} height={52} src="/logo.svg" />
        </span>
        <div
          className={`absolute border-orange-swadesh bg-transparent border-solid border rounded-full h-100 w-100 mt-1 -left-60 `}
        ></div>
        <div
          className={`absolute border-gray-ring bg-transparent border-solid border rounded-full h-100 w-100 mt-11 -left-52`}
        ></div>

        <div className="font-bold text-white mt-8 ml-9 text-5xl">
          All properties
        </div>
      </div>
      <HeroCard {...sampleProps} />
    </div>
  );
}
