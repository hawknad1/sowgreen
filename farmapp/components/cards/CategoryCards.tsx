"use client";

import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import { categoryCard } from "@/constants";
import GlobalApi from "@/utils/GlobalApi";

const CategoryCards = () => {
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res: any) => {
      setcategoryList(res.data.data);
    });
  };
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex items-center space-x-4 p-4 w-max ">
        {categoryList.map((card, index) => (
          <CategoryCard data={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
