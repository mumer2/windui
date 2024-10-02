import React, { useState } from 'react';

const TabsContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <div
          className={`tab-item ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          <i className="fa-solid fa-book"></i> Tab 1
        </div>
        <div
          className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <i className="fa-solid fa-flask"></i> Tab 2
        </div>
        <div
          className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
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
