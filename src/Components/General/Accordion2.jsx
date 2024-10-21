import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faEnvelope, faNewspaper, faComments } from '@fortawesome/free-solid-svg-icons';
import './Acc2.css';
const AccordionItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item-unique">
      <div className="accordion-header-unique" onClick={() => setIsOpen(!isOpen)} style={{backgroundColor:'white'}}>
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
