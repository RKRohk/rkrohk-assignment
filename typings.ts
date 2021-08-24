export interface CardProps {
  title: String;
  location: String;
  img_url: string;
  status: "ACTIVE" | "FUNDED";
  area: number;
  price: number;
  yield: number;
  return_target: number;
  funding_status: number;
}
