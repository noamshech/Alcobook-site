import React from 'react';
import Like from '../Like';
import './Comment.css';

export default function Comment({id, body, author, createdAt, likes }) {
  return (
    //add a button to delete this post
    <div className="w-100 mb-3">
      <div className="media g-mb-30 media-comment">
        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
          <div className="g-mb-15">
            <h5 className="h5 g-color-gray-dark-v1 mb-0">{author}</h5>
            <span className="g-color-gray-dark-v4 g-font-size-12">{new Date(createdAt).toLocaleString()}</span>
          </div>
          <div className="d-flex justify-content-between">
            <p>{body}</p>
            <Like likes={likes} id={id} itemType="comment" />
          </div>
        </div>
      </div>
    </div>
  );
}