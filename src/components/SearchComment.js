import React, { useState } from "react";
import serverURL, { postData } from "../server";
import CommentList from "./Comments/CommentList";


export default function SearchComment() {
  const [showSearchFields, setShowSearchFields] = useState(false);

  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [likes, setLikes] = useState("");
  const [comments, setComments] = React.useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const search = {};
   
    if (author !== "")
      search.author = author;

    if (likes !== "")
      search.likes = likes;

    if (body !== "")
      search.body = body;

    const searchResult = await postData(`${serverURL}/api/comment/search`, null, { search });
    console.log(searchResult);
    setComments(searchResult);
  }

  return (
    <div className='row justify-content-center'>
      <div className="container col-md-8 mb-5 col-md-offset-6 d-flex align-items-start">
        <form className="input-group" id="adv-search" style={{ flex: "1" }} onSubmit={handleSubmit}>
          <div id="myDIV" style={{ margin: "0.375rem", width: "80%" }}>
            <input type="text" onChange={e => setBody(e.target.value)} className="form-control" placeholder="Search for text" style={{ marginBottom: "0.375rem" }} />
            <input type="number" onChange={e => setLikes(e.target.value)} className="form-control" placeholder="Search for number of likes" style={{ marginBottom: "0.375rem" }} />
            <input type="text" onChange={e => setAuthor(e.target.value)} className="form-control" placeholder="Search for the author" style={{ marginBottom: "0.375rem" }} />
          </div>

          <button type="submit" className="btn btn-primary" >< i className="fa fa-search" aria-hidden="true" /> </button>

        </form>
        
        <div style={{color:"black"}}>
        <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}
