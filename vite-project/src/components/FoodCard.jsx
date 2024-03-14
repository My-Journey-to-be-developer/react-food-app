import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({
  id,
  img,
  name,
  price,
  desc,
  rating,
  category,
  handleToast,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
        <img
          // src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
          src={img}
          alt=""
          className="w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out cursor-grab"
        />
        <div className="text-sm flex justify-between">
          <h3>{name}</h3>
          <span className="text-green-500">₹{price}</span>
        </div>
        <p className="text-sm font-normal">{desc.slice(0, 80)}...</p>
        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <FaStar className="mr-1 text-yellow-400" /> {rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, price, img, rating, qty: 1 }));
              handleToast(name);
            }}
            className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
