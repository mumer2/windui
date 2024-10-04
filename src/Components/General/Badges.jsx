import React from 'react'
import CodePreview from './CodePreview'

export const Badges = () => {
  return (
    <div>
        <div className="badges">
            <h1>Badges</h1>
            <p>A badge is a visual indicator that draws attention to an interface element. It enhances the component to which it is attached with additional information.</p>
        </div>

        <div className="boxicon">
            <div className="box1">3</div>
            <div className="box2">3</div>
            <div className="box3"></div>
        </div>


        <div className='badges-content'>
        <h2>Variations</h2>
        <h4>Basic Badge</h4>
        <p>With rounded corners in 3 different sizes.</p>
        <CodePreview/>
        </div>

        <div className="boxicon">
            <div className="box1">7</div>
            <div className="box2">7</div>
            <div className="box3"></div>
        </div>
    </div>
  )
}
