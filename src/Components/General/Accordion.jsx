import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className="icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem 
        question="Do you have any social accounts?"
         
        answer="Yes! You can find Wind UI in many social platforms, such as Facebook, Discord, Reddit and many more, which you can find on our footer under Socials." 
      />
      <AccordionItem 
        question="How can I communicate with your support team?" 
        answer="You can communicate with our team for support through our discord channel. Once you have asked your question, one of our team members will answer you as soon as possible." 
      />
      <AccordionItem 
        question="Do you have a newsletter?" 
        answer="Of course! You can join our community through our newsletter which is located on the bottom of every page on our website." 
      />
      <AccordionItem 
        question="Is there any other way of communication?" 
        answer="You can always communicate with us through our social accounts and email address at info@wind-ui.com." 
      />
    </div>
  );
};

export default Accordion;
