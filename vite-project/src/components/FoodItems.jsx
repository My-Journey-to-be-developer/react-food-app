import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state)=>state.CategoryData.category);
  // const category is action.payload means it depends on which we click i.e: All, breakfast, dinner etc;
  const search = useSelector((state)=>state.SearchData.search);
  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
    {
    FoodData.filter((food)=>{
      if(category==="All"){
        // return food;
        return food.name.toLowerCase().includes(search.toLowerCase());

      }else{
        return category === food.category &&
        food.name.toLowerCase().includes(search.toLowerCase());
      }
    }).map((food)=>{
      return (
        <FoodCard
          key={food.id}
          id={food.id}
          img={food.img}
          name={food.name}
          price={food.price}
          desc={food.desc}
          category={food.category}
          rating={food.rating}
          handleToast={handleToast}
        />
      );
    })
  }
      </div>
    </>
  );
};

export default FoodItems;
