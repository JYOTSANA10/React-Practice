import React from "react";

export default function Personal() {
  return (
    <div className="form-card">
      <div className="row">
        <div className="col-7">
          <h2 className="fs-title">Personal Information:</h2>
        </div>
        <div className="col-5">
          <h2 className="steps">Step 2 - 4</h2>
        </div>
      </div>
      <label className="fieldlabels">First Name: *</label>
      <input type="text" name="fname" placeholder="First Name" />
      <label className="fieldlabels">Last Name: *</label>
      <input type="text" name="lname" placeholder="Last Name" />
      <label className="fieldlabels">Contact No.: *</label>
      <input type="text" name="phno" placeholder="Contact No." />
    </div>
  );
}
