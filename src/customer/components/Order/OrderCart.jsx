import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCart = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${order._id}`)}
      className="p-5 shadow-md shadow-grey hover:shadow-2xl border"
    >
      {order.orderItems.map((item, index) => (
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
          key={index}
        >
          <Grid item xs={6}>
            <div className="flex cursor-pointer">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src={item.product.imageUrl}
                alt={item.product.title}
              />
              <div className="ml-5 space-y-2">
                <p>{item.product.title}</p>
                <p className="opacity-50 text-xs font-semibold">Size: {item.size}</p>
                <p className="opacity-50 text-xs font-semibold">Color: {item.product.color}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <p>₹{item.discountedPrice}</p>
          </Grid>
          <Grid item xs={4}>
            {order.orderStatus === 'DELIVERED' ? (
              <p>
                <span>
                  Delivered On {new Date(order.orderDate).toLocaleDateString()}
                </span>
              </p>
            ) : (
              <p>
                <span>
                  Status: {order.orderStatus.charAt(0) + order.orderStatus.slice(1).toLowerCase()}
                </span>
              </p>
            )}
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default OrderCart;
