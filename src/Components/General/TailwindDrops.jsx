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

const TailwindDrops = () => {
  return (
    <div className="accordion">
      <AccordionItem 
        question="How does TailwindCSS works?"
         
        answer="Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for className names, generating the corresponding styles and then writing them to a static CSS file." 
      />
      <AccordionItem 
        question="How do I install TailwindCSS?" 
        answer="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js. Install tailwindcss via npm, and create your tailwind.config.js file." 
      />
      <AccordionItem 
        question="What is Wind UI about?" 
        answer="Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project." 
      />
      <AccordionItem 
        question="How do I use Wind UI components?" 
        answer="All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project." 
      />
    </div>
  );
};

export default TailwindDrops;
