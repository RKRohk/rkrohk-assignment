import Image from "next/image";
import { CardProps } from "../typings";
import CardGrid from "./CardGrid";
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

const sampleFundedProps: CardProps = {
  img_url: "/images/building1.png",
  title: "The Pavalion III",
  location: "Outer Ring Road, Bangalore",
  funding_status: 100,
  area: 52277,
  price: 12338,
  yield: 9.14,
  return_target: 18.1,
  status: "FUNDED",
};
export default function Hero() {
  return (
    <>
      <div className="bg-green-swadesh h-full w-screen font-thicccboi ">
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
        <div className="h-8 bg-yellow-swadesh -mt-64"></div>
      </div>
      <div className="bg-yellow-swadesh h-full  min-h-full">
        <div className="md:mx-28 mx-6 text-5xl md:mt-0 pt-96 sm:pt-150 md:pt-100 lg:pt-80">
          Past Properties
        </div>

        <CardGrid
          properties={[
            sampleFundedProps,
            sampleFundedProps,
            sampleFundedProps,
            sampleFundedProps,
            sampleFundedProps,
            sampleFundedProps,
          ]}
        />
      </div>
      <div className="h-screen bg-yellow-swadesh"></div>
    </>
  );
}
