import React, { useState } from "react";


export default function Search() {
  const [showSearchFields, setShowSearchFields] = useState(false);

  return (
    <div className="container col-md-8 mb-5 col-md-offset-6 d-flex align-items-start">
      <form className="input-group" id="adv-search" style={{flex: "1"}}>
        <div id="myDIV" style={{ margin: "0.375rem", width: "80%" }}>
          <input type="text" className="form-control" placeholder="Search for Cocktails" style={{ marginBottom: "0.375rem" }} />

          {showSearchFields && <input type="text" className="form-control" placeholder="author" style={{ marginBottom: "0.375rem" }} /> }
          {showSearchFields && <input type="text" className="form-control" placeholder="ingredient" style={{ marginBottom: "0.375rem" }} /> }
          {showSearchFields && <input type="text" className="form-control" placeholder="ingredient 2" style={{ marginBottom: "0.375rem" }} /> }
          {showSearchFields && <input type="text" className="form-control" placeholder="free text" style={{ marginBottom: "0.375rem" }} /> }
          

        </div>

        <button type="submit" className="btn btn-primary" >< i className="fa fa-search" aria-hidden="true" /> </button>

      </form>

      <button className="btn btn-primary" onClick={() => setShowSearchFields((state) => !state)} >Advanced search </button>
    </div>
  )
}
