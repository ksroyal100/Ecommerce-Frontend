import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import OrderCart from './OrderCart';
import { getAllOrders } from '../../../state/Order/Action';

const Order = () => {
  const dispatch = useDispatch();
const { orders = [], loading, error } = useSelector((state) => state.order || {});


  const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <div className='px:5 lg:px-20'>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5} className='hidden lg:block'>
          {/* Sidebar for Order Status */}
          <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
            <div className='space-y-4 mt-10'>
              <h1 className='font-bold uppercase'>Order Status</h1>
              {orderStatus.map((option, index) => (
                <div key={index} className='flex items-center'>
                  {/* <input type='checkbox' className='h-4 w-4 border-grey-500 text-blue-600 focus:ring-blue-500' /> */}
                  <label className='ml-3 text-sm text-grey-600'>{option.label}</label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className='space-y-5'>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <h1 className='text-lg font-bold text-gray-400 m-auto'>Empty Orders</h1>
            ) : (
              orders.map((order,index) => <OrderCart key={index} order={order} />)
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
