import React from 'react';
import { Button } from 'react-bootstrap';

const generateBookingNumber = () => {
  return 'BK' + Math.floor(100000 + Math.random() * 900000);
};

const BookingConfirmation = () => {
  const bookingNumber = generateBookingNumber();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', textAlign: 'center', backgroundColor: '#e7eff8', padding: '20px' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '25px', padding: '200px', width: '95%', maxWidth: '4000px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        <h1 style={{ marginBottom: '20px' }}>Booking Confirmation</h1>
        <p style={{ fontSize: '25px', margin: '20px 0' }}>
          Your booking has been confirmed. Thank you for choosing our trip planning service!
        </p>
        <p style={{ fontSize: '25px', margin: '20px 0' }}>
          A confirmation email with all the trip details has been sent to your email address.
        </p>
        <p style={{ fontSize: '35px', margin: '20px 0' }}>
          <strong>Booking Number:</strong> <span style={{ fontSize: '35px', fontWeight: 'bold' }}>{bookingNumber}</span>
        </p>
        <p style={{ fontSize: '25px', margin: '20px 0' }}>
          Please keep this booking number for your records.
        </p>
        <p style={{ fontSize: '25px', margin: '20px 0' }}>
          If you have any questions, feel free to contact our support team.
        </p>
        <Button
          style={{
            marginTop: '80px',
            border: '2px dotted',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            color: 'inherit',
            padding: '10px 20px'
          }}
          href="/"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
