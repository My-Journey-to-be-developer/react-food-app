import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const ItemsCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, price, name, qty }));
        toast.error(`${name} Removed from cart`);
        // toast.error("This didn't work.");
      
      }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus
              onClick={() =>
                qty >= 1
                  ? dispatch(incrementQty({ id, name, price, img, qty }))
                  : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 rounded-md hover:text-white hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlineMinus
              onClick={() =>
                qty > 1
                  ? dispatch(decrementQty({ id, name, img, price, qty }))
                  : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 rounded-md hover:text-white hover:bg-green-500 hover:border-none
            p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
