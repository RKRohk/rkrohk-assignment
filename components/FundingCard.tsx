import React from "react";
import { CardProps } from "../typings";
import ProgressBar from "./ProgressBar";
import GridRow from "./GridRow";

export default function FundingCard(props: CardProps) {
  return (
    <div className=" w-80 mx-auto shadow-lg h-100 mt-40">
      <div className="relative">
        <div className="absolute text-base z-10 bg-green-progress rounded-xl pt-1.5 pb-1.5 pl-4 pr-4 ml-5 mt-5 text-white">
          {props.status}
        </div>
        {/* <Image height={544} width={480} src={props.img_url} /> */}
        <img src={props.img_url} className="h-full" />
      </div>
      <div className="bg-white border rounded-b-xl p-14 w-full">
        <div>
          <div className="text-4xl">{props.title}</div>
          <div className="text-xl font-normal mt-2.5 flex">
            <img className="inline-block mr-3" src="./pin.svg" />
            <h2>{props.location}</h2>
          </div>
        </div>
        <div className="md:mt-8">
          <ProgressBar progress={props.funding_status} />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 ">
          <GridRow title="Area" value={props.area} />
          <GridRow title="Return Target" value={props.return_target + "%"} />
          <GridRow title="Price psf" value={"₹" + props.price} />
          <GridRow title="Funding Status" value={props.funding_status + "%"} />
          <GridRow title="Yield" value={props.yield + "%"} />{" "}
        </div>
        <button className="bg-green-progress w-full  text-white py-7 px-10 mx-auto rounded-xl mt-7">
          <div>
            Invest now
            <img className="inline-flex ml-2.5" src="/right-arrow.svg" />
          </div>
        </button>
      </div>
    </div>
  );
}
