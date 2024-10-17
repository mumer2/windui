import React from 'react'
import Date from './Date'
import CodePre from '../General/CodePre'
export const Datepickers = () => {
  const htmlCode = `   <div className="datepicker-container">
      <label>Date</label>
      <input type="date" />
      <span className="datepicker-hint">Please select a date</span>
    </div>
  `;

const reactCode = `import React from 'react';
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

`;

const cssCode =`.datepickers {
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(95, 87, 87);
}

.datepickers h1,
.datepickers h2,
.datepickers h4 {
  color: rgb(71, 85, 105);
  line-height: 2.25rem; /* Line height for headings */
}

.datepickers h1 {
  font-size: 1.875rem; /* Heading size */
  font-weight: 600; /* Bold weight */
}

.datepickers h2 {
  font-size: 1.8rem; /* Subheading size */
  font-weight: 400; /* Normal weight */
}

.datepickers h4 {
  font-size: 18px; /* Heading size */
  font-weight: 600; /* Bold weight */
}

.datepicker-container {
  margin-top: 10%;
  display: flex;
  flex-direction: column; /* Column layout for container */
  align-items: center; /* Center items */
  font-family: Arial, sans-serif; /* Font style */
  color: #98a2b3; /* Text color */
}

.datepicker-label {
  font-size: 14px; /* Label font size */
  margin-bottom: 5px; /* Spacing below label */
}

input[type="date"] {
  border: none; /* Remove border */
  color: rgb(100, 116, 139); /* Input text color */
  font-size: 18px; /* Input font size */
}

.datepicker-container label {
  margin-right: 12%; /* Right margin */
  font-size: 12px; /* Label font size */
}

.datepicker-wrapper {
  position: relative; /* Positioning for calendar icon */
  display: flex; /* Use flex for alignment */
  align-items: left; /* Align items left */
  justify-content: center; /* Center items */
  width: 250px; /* Width of the date picker */
}

.custom-datepicker-input {
  width: 100%; /* Full width */
  border: none; /* Remove border */
  border-bottom: 1px solid #e0e0e0; /* Bottom border */
  padding: 10px 10px 10px 0; /* Padding */
  font-size: 24px; /* Font size */
  color: #4a4a4a; /* Text color */
  text-align: center; /* Center text */
  outline: none; /* Remove outline */
}

.custom-datepicker-input::placeholder {
  color: #98a2b3; /* Placeholder color */
}

.calendar-icon {
  position: absolute; /* Positioning */
  right: 0; /* Align right */
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Adjust position */
  cursor: pointer; /* Pointer cursor */
}

.datepicker-hint {
  font-size: 12px; /* Font size */
  color: rgb(100, 116, 139); /* Text color */
  margin-top: 10px; /* Margin above */
  margin-right: 30px; /* Right margin */
}

.date-sec {
  margin-top: 6%;
  display: flex; /* Flexbox for layout */
  flex-wrap: wrap; /* Allow wrapping */
  justify-content: space-around; /* Space items around */
  width: 100%; /* Full width */
}

.date-sec .d1-s b {
  color: rgb(100, 116, 139); /* Text color */
}

/* Media query for small screens */
@media (max-width: 600px) {
  .custom-datepicker-input {
    font-size: 18px; /* Smaller font size */
    width: 180px; /* Adjust width */
  }

  .date-sec {
    flex-direction: column; /* Column layout for small screens */
    align-items: left; /* Center align items */
    gap: 50px; /* Add gap between items */
    justify-content: left;
  }

  .datepicker-wrapper {
    width: 100%; /* Full width for smaller screens */
  }
}
   `;

  return (
    <div>
      <div className="datepickers">
        <h1>Datepickers</h1>
        <p>The Date Picker component lets users select a date.</p>
      </div>

      <div className="date-cont">
        <Date />
      </div>

      <div className="datepickers">
        <h2>Variations</h2>
        <h4>Basic Datepicker Input</h4>
      </div>
      <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

      <div className="date-sec">
        <div className="d1-s">
          <b>Basic Size</b>
          <Date />
        </div>
        <div className="d1-s">
          <b>Large Size</b>
          <Date />
        </div>

      </div>
    </div>
  )
}
