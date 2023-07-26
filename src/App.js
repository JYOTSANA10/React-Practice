import { useState } from "react";
import "./App.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Language from "./components/Language";
import Datashow from "./components/Datashow";



function App() {

  const [step,setStep]=useState(0);
  const [formdata,setFormdata] =useState({fname:"",lname:"",cno:"", board:[], per:[],lan:[],sublan:[]})

// console.log("step",step);

  const changeStep = () =>{
    setStep(step+1);
    // console.log(step);
  }

  const changeField = () =>{

    if(step===0){
      return <Personal formdata={formdata} setFormdata={setFormdata} />
    }else if(step===1){
      const data=  document.getElementById('payment');
      data.classList.add("active");
      return <Education formdata={formdata} setFormdata={setFormdata} />
    }else if(step===2){
      const data=  document.getElementById('language');
      data.classList.add("active");
      return <Language formdata={formdata} setFormdata={setFormdata}/>
    }else{
      const data=  document.getElementById('confirm');
      data.classList.add("active");
      return <Datashow formdata={formdata} />
    }

  }

  return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
              <h2 id="heading">Sign Up Your User Account</h2>
              <p>Fill all form field to go to next step</p>
              <div id="msform">
                <ul id="progressbar">
                 
                  <li className="active" id="personal">
                    <strong>Personal</strong>
                  </li>
                  <li id="payment">
                    <strong>Education</strong>
                  </li>
                  <li id="language">
                    <strong>Language</strong>
                  </li>
                  <li id="confirm">
                    <strong>Finish</strong>
                  </li>
                </ul>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div>
                  {changeField()}
                </div>
                <div className=" mt-5">
               
                  { step === 0 || step>2 ?  null : <button className="btn btn-primary me-md-2" onClick={ () => setStep(step-1) }>Prev</button>}
                  
                  { step === 2 ? <button className="btn btn-success me-md-2" onClick={ ()=> changeStep() }> Submit</button> : (step > 2 ? null:<button className="btn btn-primary me-md-2" onClick={ ()=> changeStep() }> Next</button>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
