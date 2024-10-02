import React from 'react'
import Card from './Card'
import CodePreview from './CodePreview'

export const Features = () => {
  return (
    <div>
        <div className="features">
            <h1>Features</h1>
            <p>The Feature component is designed to highlight and showcase a specific feature, functionality, or offering within a product, application, or website. It provides a visually appealing 
                and informative way to present essential information about the feature to the user.</p>
        </div>

        <Card/>

    <div className="features-content">
        <h2>Variations</h2>
        <h3>One-line feature items with icon on the left</h3>
    </div>
    <CodePreview/>
    <Card/>
    </div>
  )
}
