import { CardProps } from "../typings";
import FundingCard from "./FundingCard";

interface CardGridProps {
  properties: CardProps[];
}
const CardGrid: React.FC<CardGridProps> = (props) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-96">
      {props.properties.map((data, index) => (
        <FundingCard key={`${index}-${data.funding_status}`} {...data} />
      ))}
    </div>
  );
};

export default CardGrid;
