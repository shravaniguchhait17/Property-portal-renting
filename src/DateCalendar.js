import React from 'react';

const DateCalendar = ({ onDateChange }) => {
  const handleChange = (e) => {
    const selectedDate = e.target.value;
    // Assuming selectedDate is in the format "dd-mm-yyyy"
    const parts = selectedDate.split('-');
    const formattedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    onDateChange(formattedDate); // Pass the Date object
  };

  return (
    <div>
      <label htmlFor="availableDate">Available from date:</label>
      <input type="date" id="availableDate" onChange={handleChange} />
    </div>
  );
};

export default DateCalendar;
