import React from 'react'
import CodePre from '../General/CodePre'

export const ButtonsGroup = () => {
    const htmlCode = `  <div className="btngroups">
        <div className="btnsgroup1">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup2">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup3">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>
        </div>
    `;
  
  const reactCode = ` import React from 'react'
import CodePre from '../General/CodePre'

export const ButtonsGroup = () => {
  <div className="btngroups">
        <div className="btnsgroup1">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup2">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup3">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>
        </div>
`;

const cssCode = `.btnsgroup-content{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(113, 101, 101);
}
.btnsgroup-content h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.btnsgroup-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.btnsgroup-content h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.btngroups{
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}
.btnsgroup1{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btnsgroup1 .btna{
  background-color: #02b583;
  cursor: pointer;
  color: white;
  padding: 20px;
}

.btnsgroup1 .btna:hover{
  background-color: #03a670;
}


.btnsgroup2{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btnsgroup2 .btna{
  color: #02b583;
  cursor: pointer;
  padding: 20px;
}
.btnsgroup2 .btna:hover{
background-color: #bbf8e3;
}

.btnsgroup3{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btnsgroup3 .btna{
  color: #02b583;
  cursor: pointer;
  padding: 20px;
  border: 1px solid #02b583;
}

.btnsgroup4{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btnsgroup4 .btna{
  background-color: #02b583;
  cursor: pointer;
  color: white;
  padding: 15px;
}

.btnsgroup4 .btna:hover{
  background-color: #03a670;
}

.-s{
margin-top: 5%;
}

.btnsgroup5{
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btnsgroup5 .btna{
  background-color: #02b583;
  cursor: pointer;
  color: white;
  padding: 10px;
}

.btnsgroup5 .btna:hover{
  background-color: #03a670;
}`;
  return (
    <div>
        <div className="btnsgroup-content">
            <h1>Button Groups</h1>
            <p>Button groups help people select options, switch views, or sort elements.</p>
        </div>

        <div className="btngroups">
        <div className="btnsgroup1">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup2">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup3">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>
        </div>


        <div className="btnsgroup-content">
            <h2>Variations</h2>
            <h4>Primary button groups</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

        <div className="btnsgroup1">
            <div className="btna">Large</div>
            <div className="btna">Large</div>
            <div className="btna">Large</div>
        </div>
        <div className="btnsgroup4 -s">
            <div className="btna">Base</div>
            <div className="btna">Base</div>
            <div className="btna">Base</div>
        </div>

        <div className="btnsgroup5">
            <div className="btna">Samll</div>
            <div className="btna">Small</div>
            <div className="btna">Small</div>
        </div>

    </div>
  )
}
