import React from "react";

export default function Language({formdata, setFormdata}) {


  const handleSubcheckbox = (e) => {
    console.log("sublan",e.target.id);
    if(formdata.sublan[e.target.id]){
    if(e.target.checked){
      formdata.sublan[e.target.id].push(e.target.value)
      console.log("-----",formdata.sublan);
      setFormdata(data => ({...data,sublan:formdata.sublan}))
    }else{
      console.log("else----",formdata.sublan[e.target.id]);
      // formdata.board[e.target.id].splice( e.target.id, 1,e.target.value);
      const data_arr = formdata.sublan[e.target.id].filter(function(item) {
        return item !== e.target.value
      })
      console.log("data_arr",data_arr,e.target.id);

      formdata.sublan.splice(e.target.id,1,data_arr);
      console.log(formdata.sublan);

      setFormdata(data => ({...data,sublan:formdata.sublan}))
      

    }
  }
    else{
      console.log(e.target.id,e.target.value);
      formdata.sublan.splice(e.target.id, 0, [e.target.value]);
      setFormdata(data => ({...data,sublan:formdata.sublan}))
    }
  }

  const checkboxHandler= (e) => {
    console.log(e.target.checked);
    if(e.target.checked){
      setFormdata(data => ({...data,lan:[...formdata.lan,e.target.value]}))
      
    }else{
      const lang = formdata.lan;
      console.log(formdata.lan,e.target.value);
      lang.splice(lang.indexOf(e.target.value), 1);
      console.log(formdata.lan,e.target.value);
      setFormdata( data => ({...data,lan:lang}))
    }
  }

  return (
    <div>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Language :</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 3 - 4</h2>
          </div>
        </div>
        <input type="checkbox" id="lan1" className=" form-check-input me-md-2 lan1 " value="Hindi"  onClick={checkboxHandler} />
        <label htmlFor="lan1"> Hindi</label>

        <input type="checkbox" id="0" className="form-check-input me-md-2 " value="Hindi_Read"  onClick={handleSubcheckbox} /><label htmlFor="lan1"> Read</label>&nbsp;&nbsp;
        <input type="checkbox" id="0" className="form-check-input me-md-2 " value="Hindi_Write"  onClick={handleSubcheckbox} /><label htmlFor="lan1"> Write</label>&nbsp;&nbsp;
        <input type="checkbox" id="0" className="form-check-input me-md-2 " value="Hindi_Speak"  onClick={handleSubcheckbox} /><label htmlFor="lan1"> Speak</label>&nbsp;&nbsp;
       <br />
        <input type="checkbox" id="lan2" className=" form-check-input me-md-2 lan2 " value="Gujrati" onClick={checkboxHandler}/>
        <label htmlFor="lan2"> Gujrati</label>

        <input type="checkbox" id="1" className="form-check-input me-md-2 " value="Gujarati_Read"  onClick={handleSubcheckbox} /><label htmlFor="lan2"> Read</label>&nbsp;&nbsp;
        <input type="checkbox" id="1" className="form-check-input me-md-2 " value="Gujarati_Write"  onClick={handleSubcheckbox} /><label htmlFor="lan2"> Write</label>&nbsp;&nbsp;
        <input type="checkbox" id="1" className="form-check-input me-md-2 " value="Gujarati_Speak"  onClick={handleSubcheckbox} /><label htmlFor="lan2"> Speak</label>&nbsp;&nbsp;
        <br />

        
        <input type="checkbox" id="lan3" className=" form-check-input me-md-2 lan3 " value="English" onClick={checkboxHandler} />
        <label htmlFor="lan3"> English</label>
        <input type="checkbox" id="2" className="form-check-input me-md-2 " value="English_Read"  onClick={handleSubcheckbox} /><label htmlFor="lan3"> Read</label>&nbsp;&nbsp;
        <input type="checkbox" id="2"className="form-check-input me-md-2 " value="English_Write"  onClick={handleSubcheckbox} /><label htmlFor="lan3"> Write</label>&nbsp;&nbsp;
        <input type="checkbox" id="2"className="form-check-input me-md-2 " value="English_Speak"  onClick={handleSubcheckbox} /><label htmlFor="lan3"> Speak</label>&nbsp;&nbsp;
       
       
      </div>
    </div>
  );
}
