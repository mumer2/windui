import React from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  // const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="datepicker-container">
      <label>Date</label>
      <input type="date" />
      <span className="datepicker-hint">Please select a date</span>
    </div>
  );
};

export default DatePickerComponent;
