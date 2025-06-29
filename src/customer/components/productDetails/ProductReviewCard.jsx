import { Avatar, Box, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Box>
            <Avatar
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
              className="text-white"
            >
              R
            </Avatar>
          </Box>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div className="space-y-1">
            <p className="font-semibold text-lg">Ram</p>
            <p className="text-gray-500 text-sm">April 5, 2024</p>
          </div>

          <div className="mt-2">
            <Rating value={4.5} readOnly precision={0.5} name="half-rating" />
          </div>

          <p className="mt-2 text-sm text-gray-700">
            Nice product, I love this shirt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewCard;
