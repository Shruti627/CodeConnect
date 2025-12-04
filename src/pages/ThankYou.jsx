import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-page">
      <h1>Thank You!</h1>
      <p>Your demo has been successfully booked.</p>

      <button onClick={() => navigate('/book-demo')}>
        Back to Demo Page
      </button>
    </div>
  );
};

export default ThankYou;
