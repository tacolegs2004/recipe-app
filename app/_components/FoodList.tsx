"use client";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { TFood } from "../api/foods/types/FoodType";

export default function FoodList({
  foodPromise,
}: {
  foodPromise: Promise<TFood>;
}) {
  const food = use(foodPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center ml-24">
      {food.recipes.map((foods) => (
        <Link href={`/food/${foods.id}`} key={foods.id} className="p-4">
          <h1 className="mr-16">{foods.title}</h1>
          <Image
            className="pt-4 pl-8"
            src={foods.image}
            alt={foods.title}
            height={200}
            width={200}
          />
        </Link>
      ))}
    </div>
  );
}
