import React from "react";

export default function Personal({formdata, setFormdata}) {
  return (
    <div className="form-card">
      <div className="row">
        <div className="col-7">
          <h2 className="fs-title">Personal Information:</h2>
        </div>
        <div className="col-5">
          <h2 className="steps">Step 1 - 4</h2>
        </div>
      </div>
      <label className="fieldlabels">First Name: *</label>
      <input type="text" className="fname form-control" placeholder="First Name" value={formdata.fname} onChange={(e) => setFormdata( data => ({...data,fname:e.target.value}))}/>
      <label className="fieldlabels">Last Name: *</label>
      <input type="text" className="lname form-control" placeholder="Last Name" value={formdata.lname} onChange={(e) => setFormdata(  data => ({...data,lname:e.target.value}))}/>
      <label className="fieldlabels">Contact No.: *</label>
      <input type="text" className="phno form-control" placeholder="Contact No." value={formdata.cno} onChange={(e) => setFormdata( data => ({...data,cno:e.target.value}))} />
    </div>
  );
}
