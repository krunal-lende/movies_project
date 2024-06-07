import React, { useState } from 'react';
import './SeatBooking.css';

const SeatBooking = () => {

    const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-booking-container">
    <h2>Movie Seat Booking</h2>
    <div className="screen">Screen 1</div>
    <div className="seats">
      {Array.from({ length: 60 }, (_, index) => (
        <div
          key={index}
          className={`seat ${selectedSeats.includes(index) ? 'selected' : ''}`}
          onClick={() => handleSeatSelection(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
    <button className=" booking__Btn" onClick={() => alert('Selected Seats: '+ selectedSeats)}>Book Selected Seats</button>
  </div>
  )
}

export default SeatBooking