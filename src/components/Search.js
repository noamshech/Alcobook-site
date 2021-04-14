import React, { useState } from "react";


export default function Search() {
  const [showSearchFields, setShowSearchFields] = useState(false);

  return  (
    <div className="container col-md-8 mb-5 col-md-offset-6 ">
    <div>
    <button  className="btn btn-primary" onClick={() => setShowSearchFields((state) => !state)} >Advanced search </button>
    
        
        <form className="input-group" id="adv-search">
          <input type="text" className="form-control" placeholder="Search for Cocktails" />
         
          {showSearchFields &&
            <div id="myDIV" >
             <input type="text" className="form-control" placeholder="author" />
             <input type="text" className="form-control" placeholder="ingredient"/>
             <input type="text" className="form-control" placeholder="ingredient 2" />
             <input type="text" className="form-control" placeholder="text" />
            </div>
          }
                 
          
                 <button type="submit" className="btn btn-primary" >< i className="fa fa-search" aria-hidden="true"  /> </button>
        
      </form>
    </div>
   
  </div>



)

}
