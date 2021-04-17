import React, { useState } from 'react';
import useToken from '../../Pages/Login/useToken';
import serverURL, { deleteData, patchData } from '../../server';
import Like from '../Like';
import './Comment.css';

export default function Comment({
  id,
  body,
  author,
  createdAt,
  likes,
  authorRef,
}) {
  const { token } = useToken();
  const [edit, setEdit] = useState(false);
  const [commentBody, setCommentBody] = useState(body);

  const isAuthor = token.user._id === authorRef;

  function onButtonClick() {
    setEdit((edit) => !edit);
  }
  function discard() {
    setEdit((edit) => !edit);
    setCommentBody(body);
  }

  function saveComment() {
    patchData(`${serverURL}/api/comment/${id}`, token.user.token, {
      body: commentBody,
      user: token.user,
    });

    setCommentBody(commentBody);
    setEdit(false);
  }
  function deleteComment() {
    deleteData(`${serverURL}/api/comment/${id}`, token.user.token, {
      user: token.user,
    });
  }

  console.log(token.user._id);

  return (
    //add a button to delete this post
    <div className='w-100 mb-3'>
      <div className='media g-mb-30 media-comment'>
        <div className='media-body p-4 u-shadow-v18 g-bg-secondary g-pa-30'>
          <div className='g-mb-15'>
            <h5 className='h5 g-color-gray-dark-v1 mb-0'>{author}</h5>

            <span className='g-color-gray-dark-v4 g-font-size-12'>
              {new Date(createdAt).toLocaleString()}
            </span>
          </div>
          <div className='d-flex justify-content-between'>
            {edit && token.user._id === authorRef ? (
              <div>
                <button
                  className='btn'
                  value='discard changes'
                  onClick={discard}
                >
                  discard changes
                </button>

                <button
                  className='btn-danger'
                  value='save changes'
                  onClick={deleteComment}
                >
                  delete comment
                </button>
                <textarea
                  className='textArea'
                  onChange={(e) => setCommentBody(e.target.value)}
                  defaultValue={commentBody}
                />

                <button
                  className='btn'
                  value='save changes'
                  onClick={saveComment}
                >
                  save changes
                </button>
              </div>
            ) : (
              <div className='w-100 d-flex justify-content-between pr-4'>
                {commentBody}
                {isAuthor && (
                  <button
                    className='btn'
                    onClick={onButtonClick}
                    style={{ padding: '0.5rem' }}
                  >
                    edit
                  </button>
                )}
              </div>
            )}

            <Like likes={likes} id={id} itemType='comment' />
          </div>
        </div>
      </div>
    </div>
  );
}
