import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['LogIn', 'Add Delivery Address', 'Order Summary ', 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation()
  const querySearch = new URLSearchParams(location.search);

  const step = querySearch.get("step")


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 
  return (
    <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-20 pt-4 sm:pt-6 w-full">
  <div className="w-full">
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
      ) : (
        <>
          <div className="mt-10">
            {step == 2 ? <DeliveryAddressForm /> : <OrderSummary />}
          </div>
        </>
      )}
    </Box>
  </div>
</div>

  );
}