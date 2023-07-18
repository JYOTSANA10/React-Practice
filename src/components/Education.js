import React from "react";

export default function Education() {
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
        <label htmlFor="board" className="fieldlabels">
          Board :
        </label>

        <select name="board" id="board">
          <option value="10th">10Th</option>
          <option value="12th">12Th</option>
          <option value="Degree">Degree</option>
          <option value="master">Master</option>
        </select>
        <div>
          <label>Percentage: *</label>
          <input type="text" name="per" placeholder="Percentage" />
        </div>
      </div>
    </div>
  );
}
