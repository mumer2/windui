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

      {/* <label className="datepicker-label">Date</label>
      <div className="datepicker-wrapper">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          className="custom-datepicker-input"
          placeholderText="dd/MM/yyyy"
        />
        <div className="calendar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
            <path d="M180 936q-24 0-42-18t-18-42V366q0-24 18-42t42-18h60v-90h60v90h360v-90h60v90h60q24 0 42 18t18 42v510q0 24-18 42t-42 18H180Zm0-60h600V516H180v420Zm0-480h600v-30H180v30ZM180 876V516v360Z"/>
          </svg>
        </div>
        
      </div> */}
      {/* <span className="datepicker-hint">Please select a date</span> */}
    </div>
  );
};

export default DatePickerComponent;
