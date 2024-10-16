import React from 'react'
import Accordion2 from './Accordion2'
import CodePre from './CodePre';


export const Accordians = () => {
  const htmlCode = ` <div className='acc-uniq'>
  <div className="accordion-unique">
    <AccordionItem
      question="Do you have any social accounts?"
      answer="Yes! You can find Wind UI on many social platforms, such as Facebook, Discord, Reddit, and more, which you can find on our footer under Socials."
      icon={faComments}
    />
    <AccordionItem
      question="How can I communicate with your support team?"
      answer="You can communicate with our team for support through our Discord channel. Once you have asked your question, one of our team members will answer you as soon as possible."
      icon={faQuestionCircle}
    />
    <AccordionItem
      question="Do you have a newsletter?"
      answer="Of course! You can join our community through our newsletter which is located at the bottom of every page on our website."
      icon={faNewspaper}
    />
    <AccordionItem
      question="Is there any other way of communication?"
      answer="You can always communicate with us through our social accounts and our email address at info@wind-ui.com."
      icon={faEnvelope}
    />
  </div>
  </div>
  
 ---------------- CSS -------------

 
/* ****************** */
    /* Accordions */
/* ****************** */


/* Ensure accordion component doesn't overflow */
.accordions-container {
  max-height: 100%;
  margin-top: 10%;
  overflow-y: auto;
  padding: 20px;
  color: rgb(71, 85, 105);
  font-size: 16px;
}
.accordion-header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.accordion-icon {
  margin-right: 10px;
}


.accordions-container {
  height: 100%;
  overflow-y: auto; /* Allow vertical scrolling if needed */
}

.accordions-container p{
  font-size: 18px;
  color: rgb(100, 116, 139);
}
.accordions-container h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}


.accordion {
  max-width: 750px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: gray;
}

.accordion-item {
  border-bottom: 1px solid rgb(229, 225, 225);
}
.accordion-item h3{
  color: rgb(63, 62, 62);
  font-weight: 400;
}

.accordion-header {
  padding: 15px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.acc-cont{
  background-color: rgb(255, 255, 255);
  margin: 20px;
  box-shadow: whitesmoke;
  border: 1px solid  rgb(231, 223, 223);
  border-radius: 10px;
  padding: 50px;
}

/* .accordion-header:hover {
  background-color: #e0e0e0;
} */

.icon {
  font-size: 18px;
}

.accordion-content {
  padding: 15px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  font-size: 16px;
}
  `;

const reactCode = `import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faEnvelope, faNewspaper, faComments } from '@fortawesome/free-solid-svg-icons';
import './Acc2.css';
const AccordionItem = ({ question, answer, icon }) => {
const [isOpen, setIsOpen] = useState(false);

return (
  <div className="accordion-item-unique">
    <div className="accordion-header-unique" onClick={() => setIsOpen(!isOpen)}>
      <div className="accordion-header-content-unique">
        <FontAwesomeIcon icon={icon} className="accordion-icon-unique" />
        <h3 className="accordion-question-unique">{question}</h3>
      </div>
      <span className="toggle-icon-unique">{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="accordion-content-unique">{answer}</div>}
  </div>
);
};

const Accordion = () => {
return (
  <div className='acc-uniq'>
  <div className="accordion-unique">
    <AccordionItem
      question="Do you have any social accounts?"
      answer="Yes! You can find Wind UI on many social platforms, such as Facebook, Discord, Reddit, and more, which you can find on our footer under Socials."
      icon={faComments}
    />
    <AccordionItem
      question="How can I communicate with your support team?"
      answer="You can communicate with our team for support through our Discord channel. Once you have asked your question, one of our team members will answer you as soon as possible."
      icon={faQuestionCircle}
    />
    <AccordionItem
      question="Do you have a newsletter?"
      answer="Of course! You can join our community through our newsletter which is located at the bottom of every page on our website."
      icon={faNewspaper}
    />
    <AccordionItem
      question="Is there any other way of communication?"
      answer="You can always communicate with us through our social accounts and our email address at info@wind-ui.com."
      icon={faEnvelope}
    />
  </div>
  </div>
);
};

export default Accordion;



---------------CSS--------------


/* ****************** */
    /* Accordions */
/* ****************** */


/* Ensure accordion component doesn't overflow */
.accordions-container {
  max-height: 100%;
  margin-top: 10%;
  overflow-y: auto;
  padding: 20px;
  color: rgb(71, 85, 105);
  font-size: 16px;
}
.accordion-header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.accordion-icon {
  margin-right: 10px;
}


.accordions-container {
  height: 100%;
  overflow-y: auto; /* Allow vertical scrolling if needed */
}

.accordions-container p{
  font-size: 18px;
  color: rgb(100, 116, 139);
}
.accordions-container h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}


.accordion {
  max-width: 750px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: gray;
}

.accordion-item {
  border-bottom: 1px solid rgb(229, 225, 225);
}
.accordion-item h3{
  color: rgb(63, 62, 62);
  font-weight: 400;
}

.accordion-header {
  padding: 15px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.acc-cont{
  background-color: rgb(255, 255, 255);
  margin: 20px;
  box-shadow: whitesmoke;
  border: 1px solid  rgb(231, 223, 223);
  border-radius: 10px;
  padding: 50px;
}

/* .accordion-header:hover {
  background-color: #e0e0e0;
} */

.icon {
  font-size: 18px;
}

.accordion-content {
  padding: 15px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  font-size: 16px;
}
`;
  return (
    <div>
      <div className="accordions-container">
        {/* Accordion content goes here */}
        <h1>Accordions</h1>
        <p>The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information.</p>
      </div>
      <div className='acc-cont'>
        <Accordion2 />
      </div>
      <div className="accordions-container">
        <h1>Variations</h1>

        <h4>Basic Accordion</h4>
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}>
      
      </CodePre>
    </div>

        <div className='acc-cont'>
          <Accordion2 />
        </div>
      </div>
    </div>
  )
}
