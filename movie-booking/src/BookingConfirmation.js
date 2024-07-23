import React from 'react';
import { useLocation } from 'react-router-dom';

function BookingConfirmation() {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state;

  const divStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
  };

  return (
    <div style={divStyle}>
      <h1 style={{ textAlign: 'center' }}>Seat Booked Successfully!</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
}

export default BookingConfirmation;
