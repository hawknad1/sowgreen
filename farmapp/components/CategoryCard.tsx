"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlobalApi from "@/utils/GlobalApi";

interface CategoryCardProps {
  data: any;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  // console.log(data?.attributes?.image?.data[0]?.attributes?.url);

  return (
    <Link
      href={{
        pathname: "/category",
        query: { q: data?.attributes.category },
      }}
    >
      <div className="flex gap-4 w-max">
        <div className="flex flex-col md:flex gap-2" key={data?.id}>
          <div className="w-28 h-28 bg-[#F1EEDC] flex justify-center items-center rounded-lg shadow-sm">
            <Image
              src={`http://localhost:1337${data?.attributes?.image?.data[0]?.attributes?.url}`}
              alt="image"
              width={100}
              height={100}
              className="object-contain h-24 w-24 flex"
            />
          </div>
          <p className="text-xs tracking-wide font-semibold">
            {data?.attributes.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
