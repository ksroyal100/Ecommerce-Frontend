import React, { useEffect } from 'react';
import OrderTracker from './OrderTracker';
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../state/Order/Action';

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div className='px:5 lg:px-20'>

      <div className='py-20'>
        <OrderTracker activeStep={order?.orderStatus === 'DELIVERED' ? 3 : 2} />
      </div>

      <Grid className="space-x-5" container spacing={2}>
        {order?.orderItems?.map((item) => (
          <Grid
            key={item._id}
            item
            container
            className='shadow-xl rounded-md p-5 border'
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid item xs={6}>
              <div className='flex cursor-pointer space-x-3'>
                <img
                  className='w-[5rem] h-[5rem] object-cover object-top'
                  src={item.product.imageUrl}
                  alt={item.product.title}
                />
                <div className='ml-5 space-y-2'>
                  <p className='font-semibold'>{item.product.title}</p>
                  <p className='text-xs font-semibold'>Size: {item.size}</p>
                  <p className='text-xs font-semibold'>Color: {item.product.color}</p>
                  <p className='text-xs font-semibold'>₹{item.discountedPrice}</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: 'Blue' }}>
                <span> On the  Way....</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
