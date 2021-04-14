import React from "react";
import { Link } from "react-router-dom";
import Like from "../components/Like";
import './Post.css';


export default function PostPage({title,image,body,ingredients,steps,author,createdAt,likes,comments}) {
  return(

  
    <div>
    <link href="https://fonts.googleapis.com/css?family=Rokkitt" rel="stylesheet" /> 
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    {/* ==============================================
  Hero
  =============================================== */}
    <section className="hero">
      <div className="container">
        <div className="row">	
          <div className="col-lg-6 offset-lg-3">
            <div className="cardbox shadow-lg bg-white">
              <div className="cardbox-heading">
             
                <div className="media m-0">
                  <div className="d-flex mr-3">
                    <a href><img className="img-fluid rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" alt="User" /></a>
                  </div>
                  <div className="media-body">
                    <p className="m-0">{author}</p>
                    <p className="m-0">{title}</p>
                   
                    <small><span><i className="icon ion-md-time" /> {createdAt}</span></small>
                  </div>
                </div>{/*/ media */}
              </div>{/*/ cardbox-heading */}
              <div className="cardbox-item">
                <img className="img-fluid" src={image} />
              </div>{/*/ cardbox-item */}
              <div className="cardbox-item">
                {//keep it short somehow
                body
                              }
              </div>{/*/ cardbox-item */}
              <div className="cardbox-base">
                <ul className="float-right">
                  <li><a><i className="fa fa-comments" /></a></li>
                  <li><a><em className="mr-5">{comments?.length}</em></a></li>
                  
                  
                </ul>
                <ul>
                  <li><Like/></li>
                   <li><a><span>{likes}</span></a></li>
                </ul>			

              </div>{/*/ cardbox-base */}
              <div className="cardbox-comments">
                <span className="comment-avatar float-left">
                  <a href><img className="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..." /></a>                            
                </span>
                <div className="search">
                  <input placeholder="Write a comment" type="text" />
                  <button><i class="fas fa-cocktail"></i></button>
                </div>{/*/. Search */}
              </div>{/*/ cardbox-like */}			  
            </div>{/*/ cardbox */}
          </div>{/*/ col-lg-6 */}	
          
        </div>{/*/ row */}
      </div>{/*/ container */}
    </section>
  </div>

        );
}