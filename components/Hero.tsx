import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { CardProps } from "../typings";
import CardGrid from "./CardGrid";
import HeroCard from "./HeroCard";

export default function Hero(props: { building: CardProps }) {
  const { data, error } = useSWR<CardProps[]>("/api/building");

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
        <HeroCard {...props.building} />
        <div className="h-8 bg-yellow-swadesh -mt-64"></div>
      </div>
      <div className="bg-yellow-swadesh h-full  min-h-full">
        <div className="md:mx-28 mx-6 text-5xl md:mt-0 pt-96 sm:pt-150 md:pt-100 lg:pt-80">
          Past Properties
        </div>

        {data ? <CardGrid properties={data} /> : <div></div>}
      </div>
      <div className="h-screen bg-yellow-swadesh"></div>
    </>
  );
}
