import React, { useState } from "react";

export default function Education({ formdata, setFormdata }) {
  const [len, setLen] = useState(0);

  const changeBoard=(e)=>{
    console.log("In Function",e.target.id);
    if(formdata.board[e.target.id]){
      console.log("in if1===",formdata.board);

      formdata.board.splice( e.target.id, 1,e.target.value);
      console.log("in if===",formdata.board);

     setFormdata((data) => ({ ...data, board:formdata.board  }))
    }else{
      setFormdata((data) => ({ ...data, board:[...formdata.board,e.target.value]  }))
    }
    
  }

  const deleteField = () => {
    if(len>0){
    setLen(len - 1);
    formdata.board.pop();
    formdata.per.pop();
    console.log(formdata.board,formdata.per);
    setFormdata((data) => ({ ...data, board:formdata.board,per:formdata.per  }))
  }
  }

  const perHandler =(e)=>{
    if(formdata.per[e.target.id]){
      formdata.per.splice( e.target.id, 1,e.target.value);
      setFormdata(data => ({ ...data, per:formdata.per  }))

    }else{
      setFormdata(data => ({ ...data, per:[...formdata.per,e.target.value]  }))

    }
  }

  const Data = () => {
    console.log("len----",len);
  const inerHtml_arr = [];

    for(var i=0;i<=len;i++){

    inerHtml_arr.push(
      <div>
        <label htmlFor="board" className="fieldlabels">
          Board :
        </label>
        <select
          name="board"
          id={i}
          className="form-select fw-bolder"
          value={formdata.board[i]}
          onChange={(e) =>
            changeBoard(e)
          }
        >
          <option value="Select" selected disabled>Select Board</option>

          <option value="10th">10Th</option>
          <option value="12th">12Th</option>
          <option value="Degree">Degree</option>
          <option value="master">Master</option>
        </select>
        <div>
          <label>Percentage: *</label>
          <input
            type="text"
            id={i}
            className="per form-control"
            placeholder="Percentage"
            value={formdata.per[i]}
            onChange={
              perHandler 
            }
          />
        </div>
      </div>
    );}

    return inerHtml_arr;
  };

  
  return (
    <div>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Personal Information:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 2 - 4</h2>
          </div>
        </div>
        <div className="education"> <Data/></div>
        <div className="text-center mt-3">
          <button onClick={() =>  setLen(len + 1)} className="btn btn-secondary me-md-2">+</button>
          <button onClick={() =>  deleteField()} className="btn btn-secondary me-md-2">-</button>
        </div>
      </div>
    </div>
  );
}
