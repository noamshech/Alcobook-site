import React from 'react';
import Comment from './Comment';

export default function CommentList({comments}) {
  return (

    <div>
        
        <div className="container">
          <div className="row">
          <Comment/>
          </div>
        </div>
      </div>
   
  )
}