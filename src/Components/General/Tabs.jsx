import React from 'react'
import TabsContent from './TabsContent'

export const Tabs = () => {
  return (
    <div>
        <div className="tabs">
            <h1>Tabs</h1>
            <p>Tabs organize content across different screens, data sets, and other interactions.</p>
        </div>

        <TabsContent/>
    </div>
  )
}
