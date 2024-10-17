import React from 'react'
import TabsContent from './TabsContent'
import CodePre from './CodePre'

export const Tabs = () => {
  const htmlCode = ` <div className="tabs-container">
      <div className="tabs-header">
        <div
        
          <i className="fa-solid fa-book"></i> Tab 1
        </div>
        <div
        
          <i className="fa-solid fa-flask"></i> Tab 2
        </div>
        <div
         
          <i className="fa-solid fa-chart-pie"></i> Tab 3
        </div>
      </div>
      <div className="tabs-content">
        {activeTab === 0 && (
          <div className="tab-content">
            <p>
              What is the recipe for successful achievement? To my mind there are just four
              essential ingredients: Choose a career you love, give it the best there is in you,
              seize your opportunities, and be a member of the team.
            </p>
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <p>One must be entirely sensitive to the structure of the material that one is handling. One must yield to it in tiny details of execution, perhaps the handling of the surface or grain, and one must master it as a whole.</p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-content">
            <p>Even though there is no certainty that the expected results of our work will manifest, we have to remain committed to our work and duties; because, even if the results are slated to arrive, they cannot do so without the performance of work.</p>
          </div>
        )}
      </div>
    </div>
  `;

const reactCode = `import React, { useState } from 'react';

const TabsContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <div
         
          <i className="fa-solid fa-book"></i> Tab 1
        </div>
        <div
         
          <i className="fa-solid fa-flask"></i> Tab 2
        </div>
        <div
         
          <i className="fa-solid fa-chart-pie"></i> Tab 3
        </div>
      </div>
      <div className="tabs-content">
        {activeTab === 0 && (
          <div className="tab-content">
            <p>
              What is the recipe for successful achievement? To my mind there are just four
              essential ingredients: Choose a career you love, give it the best there is in you,
              seize your opportunities, and be a member of the team.
            </p>
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <p>One must be entirely sensitive to the structure of the material that one is handling. One must yield to it in tiny details of execution, perhaps the handling of the surface or grain, and one must master it as a whole.</p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-content">
            <p>Even though there is no certainty that the expected results of our work will manifest, we have to remain committed to our work and duties; because, even if the results are slated to arrive, they cannot do so without the performance of work.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsContent;
`;

const cssCode = `.tabs{
  margin-top: 15%;
  margin-left: 2%;
  color: #7e7676;
}
.tabs h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.tabs h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.tabs h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.tab-cont{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 60px;
}
/* Tabs Content */


.tabs-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.tabs-header {
  display: flex;
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 10px;
}

.tab-item {
  cursor: pointer;
  padding: 12px 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  color: #64748b;
}

.tab-item:hover {
  color: #10b981;
}

.tab-item.active {
  color: #10b981; /* Text color for the active tab */
  border-bottom: 2px solid #10b981; /* Green border for active tab */
}

.tabs-content {
  margin-top: 20px;
}

.tab-content {
  font-size: 18px;
  color: #595e64;
}`;
  return (
    <div>
      <div className="tabs">
        <h1>Tabs</h1>
        <p>Tabs organize content across different screens, data sets, and other interactions.</p>
      </div>
      <div className="tab-cont">
        <TabsContent />

      </div>
      <div className="tabs">
        <h2>Variations</h2>
        <h4>Basic Tabs</h4>
      </div>
      <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

      <div className="tab-cont">
        <TabsContent />

      </div>

    </div>
  )
}
