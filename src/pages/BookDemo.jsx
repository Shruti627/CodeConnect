import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookDemo.css';

const BookDemo = () => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate('/booking-form');
  };

  return (
    <div className="book-demo-container">
      <div className="book-demo-card">
        <div className="book-demo-header">
          <h1>Experience Our Product</h1>
          <p>Discover the features that can transform your workflow.</p>
        </div>

        <div className="book-demo-body">
          <p>Book a personalized demo and get started today!</p>

          <button onClick={handleBook} className="book-demo-button">
            Proceed to Booking Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
