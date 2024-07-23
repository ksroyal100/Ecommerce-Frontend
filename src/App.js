import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouter from './customerRoutes/CustomerRouter';
import PaymentSuccess from './customer/components/paymentSuccess/PaymentSuccess';
import PaymentSuccessDone from './customer/components/paymentSuccess/PaymentSuccessDone';


function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouter />}></Route>
        <Route path='/api/payments/' element={<PaymentSuccess />}></Route>
      <Route path='/api/payments/done' element={<PaymentSuccessDone />}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
