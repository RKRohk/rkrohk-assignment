import { InferGetStaticPropsType } from "next";
import CardGrid from "../components/CardGrid";
import Hero from "../components/Hero";
import { CardProps } from "../typings";

export default function Home({
  building,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="font-bold font-thicccboi bg-yellow-swadesh">
      <Hero building={building} />
    </div>
  );
}

export const getStaticProps = async () => {
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

  return {
    props: {
      building: sampleProps,
    },
  };
};
