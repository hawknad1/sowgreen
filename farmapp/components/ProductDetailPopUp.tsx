"use client";

import { Product } from "@/typings/productTypings";
import Image from "next/image";
import { Button } from "./ui/button";
import { smallImage } from "@/constants";
import {
  ShoppingCartIcon,
  HeartIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import Ratings from "./Ratings";
import { useRouter } from "next/navigation";

interface Props {
  product: any;
}

const ProductDetailPopUp = ({ product }: Props) => {
  const router = useRouter();

  console.log(
    `heyy ----!! ${product?.attributes?.image?.data[0]?.attributes?.url}`
  );
  console.log(`products popup here--- ${product}`);
  return (
    <div className="flex items-center gap-4">
      {/* <h3 className="text-xl flex justify-center font-bold mb-4 w-full">{`${product?.attributes?.category?.data?.attributes?.category} / ${product?.attributes?.title}`}</h3> */}
      <div className="">
        <Image
          src={product?.attributes?.image?.data[0]?.attributes?.url}
          alt={product?.attributes?.title}
          width={400}
          height={400}
          className=" bg-gray-100 object-contain w-[200px] h-[200px] p-2 rounded-2xl"
        />
      </div>
      <div className="h-[200px] flex flex-col flex-1">
        <p className="text-neutral-400 text-sm">
          {`Categories -> ${product?.attributes?.category?.data?.attributes?.category}`}
        </p>
        <h3 className="text-2xl font-bold mb-3">
          {product?.attributes?.title}
        </h3>
        <div className="flex items-center space-x-2">
          <p className="text-xl font-bold text-black">{`GHC ${product?.attributes?.price}`}</p>
          <p className="bg-black text-white text-[10px] font-medium px-2  p-1 rounded-full w-fit">
            20% Disc
          </p>
        </div>
        <p className="text-sm font-medium text-neutral-600">400ml / each</p>

        <div className="flex items-center mt-4">
          <Button className="rounded-full p-0 px-6 font-semibold hover:bg-slate-100 bg-gray-200 text-black">
            Add to Cart
          </Button>
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-1 hover:text-gray-400 cursor-pointer">
            <HeartIcon className="h-5 w-5" />
            <p className="text-sm font-medium">Favorite</p>
          </div>
          <div className="flex items-center gap-1 hover:text-gray-400 cursor-pointer">
            <ClipboardDocumentListIcon className="h-5 w-5" />
            <p className="text-sm font-medium">Add To List</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPopUp;
