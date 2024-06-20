import { Product } from "@/typings/productTypings";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchProduct(productId: any) {
  const res = await fetch(`http://localhost:1337/api/products/${productId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
