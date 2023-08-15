import FoodList from "./_components/FoodList";
import { TFood } from "./api/foods/types/FoodType";

export default async function Page({
  foodPromise,
}: {
  foodPromise: Promise<TFood>;
}) {
  const foodReq = fetch("http://localhost:3000/api/foods", {
    cache: "no-cache",
  }).then((res) => res.json()) as Promise<TFood>;
  return (
    <div>
      Food: <FoodList foodPromise={foodReq} />
    </div>
  );
}
