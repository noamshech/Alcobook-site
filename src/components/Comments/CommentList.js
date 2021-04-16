import React from 'react';
import Comment from './Comment';

export default function CommentList({ comments }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          {
            (!comments.length) ? (
              <p className="p-4" style={{color:'black'}}>
                No one has commented on this magnifisent cocktail yet, be the first!
              </p>
            ) : (
              comments.map((data, key) => {
                return <Comment key={key} body={data.body} author={data.author} id={data._id} createdAt={data.createdAt} likes={data.likes} />;
              })
            )
          }
        </div>
      </div>
    </div>
  )
}