import React from 'react'
import Pricing from './Pricing'
import CodePreview from './CodePreview'
import Price from './Price2'

export const PricingTables = () => {
  return (
    <div>
        <div className="pricingtables">
            <h1>Pricing Tables</h1>
            <p>The pricing table component allows users to get an overview of what pricing plans are offered and how they differ, on a product or service.</p>
        </div>

        <Pricing/>

        <div className="pricingtables">
            <h2>Variations</h2>
            <h4>Basic</h4>
        </div>

        <CodePreview/>

        <Price/>
    </div>
  )
}
