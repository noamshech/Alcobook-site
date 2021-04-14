import React from 'react';
import Like from '../Like';


export default function Comment({body,author,authorRef,createdAt,likes}) {
  return (

    
            <div className="col-md-8">
              <div className="media g-mb-30 media-comment">
                 <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                  <div className="g-mb-15">
                    <h5 className="h5 g-color-gray-dark-v1 mb-0">{author}</h5>
                    <span className="g-color-gray-dark-v4 g-font-size-12">{createdAt}</span>
                  </div>
                  <p>{body}</p>
                  <ul className="list-inline d-sm-flex my-0">
                    <li className="list-inline-item g-mr-20">
                      <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                        {
                          //TODO when yo u press like it will update the page again.
                        }
                       <Like/>
                        {likes?.length}
                      </a>
                    </li>
                    
                    
                  </ul>
                </div>
              </div>
            </div>
            
          
   
  );
}