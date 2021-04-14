import React from "react";
import { Link } from "react-router-dom";

import CommentList from "./Comments/CommentList";
import Like from "./Like";


export default function PostSummery({id,title,image,body,ingredients,steps,author,createdAt,likes,comments}) {
const [commentsArr,setItems]=React.useState([comments]);

  return (
    <div className="col-md-8 mb-5 col-md-offset-6 center-block">
      <div className="card h-100">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src={image} />
               
          <p className="card-text">{body}</p>
        </div>
        <div className="card-footer">
       <div className="row">
        <Link  className="nav-link"to={`/post/${id}`}>Go to post</Link>
          <Like likes={likes} /> 
          </div>
          <CommentList/> {comments?.length}

        </div>
      </div>
    </div>
  );
}
