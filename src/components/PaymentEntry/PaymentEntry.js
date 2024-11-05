import { React, useEffect } from 'react';

import CardEntry from './CardEntry/CardEntry';
import AddressEntry from './AddressEntry/AddressEntry';

import './PaymentEntry.css';
import { useNavigate } from 'react-router-dom';

const PaymentEntry = ({ orderProp, setOrderProp }) => {
  const navigate = useNavigate();

  const handlePaymentEntrySubmit = (e) => {
    e.preventDefault();
    navigate('/purchase/shippingEntry');
  }

  const setCard = (card) => {
    setOrderProp((prevOrder) => {
      return {
        ...prevOrder,
        payment: {
          ...prevOrder.payment,
          card: card
        }
      };
    });
  }

  const setAddress = (address) => {
    setOrderProp((prevOrder) => {
      return {
        ...prevOrder,
        payment: {
          ...prevOrder.payment,
          address: address
        }
      }
    });
  }

  useEffect(() => {
    if (!orderProp) {
      console.log('no order')
      navigate('/purchase');
    }
  });

  return (
    <div className='flex flex-column align-items-center container'>
      <div className='row align-items-center w-50'>
        <div className='col-3 flex justify-content-start p-0'>
          <button id='back-button' className='btn btn-link text-white text-decoration-none fw-bold' onClick={() => navigate('/purchase')}>Back</button>
        </div>

        <div className='col-6'>
          <h1 className='m-0'>Payment</h1>
        </div>

        <div className='col-3'>

        </div>
      </div>

      <form onSubmit={handlePaymentEntrySubmit} className='my-3 flex flex-column gap-3 align-items-center w-50'>
        <CardEntry card={orderProp.payment.card} setCard={setCard} />
        <AddressEntry address={orderProp.payment.address} setAddress={setAddress} title='Billing' />

        <button className="my-3 w-25 fw-bold rounded-pill border" type='submit'>Submit</button>
      </form>

    </div>
  );
};

export default PaymentEntry;