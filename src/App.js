import { useState } from "react";
import "./App.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Language from "./components/Language";

function App() {

  const [step,setStep]=useState(0);

console.log("step",step);

  const changeStep = () =>{
    setStep(step+1);
    console.log(step);
  }

  const changeField = () =>{

    if(step===0){
      return <Personal/>
    }else if(step===1){
      const data=  document.getElementById('payment');
      data.classList.add("active");
      return <Education/>
    }else if(step===2){
      const data=  document.getElementById('language');
      data.classList.add("active");
      return <Language/>
    }else{
      const data=  document.getElementById('confirm');
      data.classList.add("active");
      <h1>Success</h1>
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
                <div >
                  { step === 0 ?  null : <button onClick={ () => setStep(step-1) }>Prev</button>}
                  
                  { step === 2 ? <button onClick={ ()=> changeStep() }> Submit</button> :<button onClick={ ()=> changeStep() }> Next</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
