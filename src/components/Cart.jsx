import { ShoppingBag } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/features/cart/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();

  return (
    <div className='cursor-pointer'>
      <ShoppingBag onClick={() => dispatch(openModal(true))} />
    </div>
  );
}
