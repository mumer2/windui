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
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
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
