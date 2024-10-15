import React from 'react'
import TabsContent from './TabsContent'
import CodePreview from './CodePreview'

export const Tabs = () => {
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
      <CodePreview />

      <div className="tab-cont">
        <TabsContent />

      </div>

    </div>
  )
}
