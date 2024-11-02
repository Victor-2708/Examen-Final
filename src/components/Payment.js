// Payment.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { pizza, total } = location.state || {};

  const handlePayment = () => {
    navigate('/order-status', { state: { pizza, total } });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Información de Pago</h2>
        {/* Campos de pago */}
        <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card Number" className="w-full mb-4 p-2 border rounded" />
        <input value={validity} onChange={(e) => setValidity(e.target.value)} placeholder="Validity" className="w-full mb-4 p-2 border rounded" />
        <input value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV" className="w-full mb-4 p-2 border rounded" />
        <input value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} placeholder="Name on Card" className="w-full mb-4 p-2 border rounded" />

        <p className="text-lg font-bold mb-4">Total: ${total}</p>
        <button onClick={handlePayment} className="w-full bg-green-500 text-white p-2 rounded">Pagar</button>
      </div>
    </div>
  );
};

export default Payment;