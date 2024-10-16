import React from 'react'
import CodePre from './CodePre'

export const Badges = () => {
  const htmlCode = `  <div className="boxicon">
        <div className="box1">3</div>
        <div className="box2">3</div>
        <div className="box3"></div>
      </div>


      ----------------------- CSS ----------------------

      
/* *************************** */
           /* Badges */
/* *************************** */


.badges{
  margin-top: 16%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);

}
.badges h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}

.boxicon{
padding: 50px;
justify-content: center;
text-align: center;
display: flex;
gap: 30px;
}

.boxicon .box1{
  width: 30px;
  height: 25px;
  background-color: rgb(7, 230, 254);
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  color: white;
  display: flex;
}
.boxicon .box2{
  width: 25px;
  height: 20px;
  text-align: center;
  justify-content: center;
  color: white;
  background-color: rgb(254, 7, 200);
  border-radius: 5px;
  display: flex;
}
.boxicon .box3{
  width: 15px;
  height: 15px;
  background-color: rgb(7, 230, 254);
  border-radius: 30px;
  display: flex;
}

.badges-content{
  margin-top: 12%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);
}
.badges-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}

    `;
  
  const reactCode = ` import React from 'react'
import CodePre from './CodePre'

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
      </div>

      <div className="code-cont">
        <CodePre htmlCode={htmlCode} reactCode={reactCode} />
      </div>

      <div className="boxicon">
        <div className="box1">7</div>
        <div className="box2">7</div>
        <div className="box3"></div>
      </div>
    </div>
  )
}

---------------- CSS -----------------


/* *************************** */
           /* Badges */
/* *************************** */


.badges{
  margin-top: 16%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);

}
.badges h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}

.boxicon{
padding: 50px;
justify-content: center;
text-align: center;
display: flex;
gap: 30px;
}

.boxicon .box1{
  width: 30px;
  height: 25px;
  background-color: rgb(7, 230, 254);
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  color: white;
  display: flex;
}
.boxicon .box2{
  width: 25px;
  height: 20px;
  text-align: center;
  justify-content: center;
  color: white;
  background-color: rgb(254, 7, 200);
  border-radius: 5px;
  display: flex;
}
.boxicon .box3{
  width: 15px;
  height: 15px;
  background-color: rgb(7, 230, 254);
  border-radius: 30px;
  display: flex;
}

.badges-content{
  margin-top: 12%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);
}
.badges-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}

`;
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
      </div>

      <div className="code-cont">
        <CodePre htmlCode={htmlCode} reactCode={reactCode} />
      </div>

      <div className="boxicon">
        <div className="box1">7</div>
        <div className="box2">7</div>
        <div className="box3"></div>
      </div>
    </div>
  )
}
