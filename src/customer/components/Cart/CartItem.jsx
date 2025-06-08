import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { removeCartItem, updateCartItem } from "../../../state/Cart/Action";

const CartItem = ({ item, showButton = true }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // ✅ Local state for quantity (optimistic UI)
  const [quantity, setQuantity] = useState(item.quantity);

  // ✅ Sync if redux updates (e.g., after full cart reload)
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  // ✅ Handle quantity change
  const handleUpdateCartItem = (num) => {
    const newQuantity = quantity + num;

    // 🔒 Prevent quantity from going below 1
    if (newQuantity < 1) return;

    setQuantity(newQuantity); // ✅ Optimistic UI

    const data = {
      data: { quantity: newQuantity },
      cartItemId: item?._id,
      jwt,
    };

    dispatch(updateCartItem(data)); // 🔁 Sync with backend
  };

  const handleRemoveCartItem = () => {
    const data = { cartItemId: item?._id, jwt };
    dispatch(removeCartItem(data));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md mb-4">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt={item?.product?.title}
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-medium text-lg">{item?.product?.title}</p>
          <p className="opacity-70">Size: {item?.size}</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-5 items-center text-grey-900 mt-4">
            <p className="font-semibold text-lg">₹{item?.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item?.price}</p>
            <p className="text-green-600 font-semibold">
              {item?.product?.discountPersent}% Off
            </p>
          </div>
        </div>
      </div>

      {showButton && (
        <div className="mt-6 lg:flex items-center lg:space-x-10">
          <div className="flex items-center space-x-2">
            <IconButton
              aria-label="Decrease quantity"
              onClick={() => handleUpdateCartItem(-1)}
              disabled={quantity <= 1}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{quantity}</span>
            <IconButton
              aria-label="Increase quantity"
              onClick={() => handleUpdateCartItem(1)}
              sx={{ color: "rgb(145, 85, 253)" }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <Button
              onClick={handleRemoveCartItem}
              sx={{ color: "rgb(145, 85, 253)" }}
            >
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
