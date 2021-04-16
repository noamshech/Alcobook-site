import { faCommentAlt, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


export default function PostSummery({ id, title, image, body, ingredients, steps, author, createdAt, likes, comments }) {
  return (
    <div className="col-md-8 mb-5 col-md-offset-6 center-block" >
      <Link className="nav-link" to={`/post/${id}`}>
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div style={{ height: "150px", width: "100%", overflow: "hidden" }}>
              <img className="mx-auto w-100 g-mt-3 g-mr-15" src={image} alt="post" />
            </div>

            <p className="card-text">{body}</p>
          </div>
          <div className="card-footer" >
            <div className="row">
              <div className="w-100 d-flex justify-content-between pr-4 pl-4">
                <div>
                  <FontAwesomeIcon icon={faHeartbeat} color="#43A58D" className="mr-4" />
                  {likes?.length}
                </div>
                <div>
                  <FontAwesomeIcon icon={faCommentAlt} color="#43A58D" className="mr-4" />
                  {comments?.length}
                </div>
              </div>
            </div>


          </div>
        </div>
      </Link>
    </div>
  );
}
